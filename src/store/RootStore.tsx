import { makeAutoObservable, runInAction } from 'mobx';
import { IDeleteItemResponse, IList, IListsResponse, IRootStore, IAddItemResponse, ICard } from 'src/types';
import { http } from 'src/utils';

export class RootStore implements IRootStore {
    loading = false;
    isError = false;
    lists: IList[] = [];
    draggingTaskID: string | null = null;
    draggingFromListID: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    getLists = async () => {
        try {
            runInAction(() => {
                this.isError = false;
                this.loading = true;
            })
            const { data }: IListsResponse = await http.get('/lists');
            runInAction(() => {
                this.lists = data.data;
                this.loading = false;
                this.sortCardsAscending();
            });
        } catch (e) {
            runInAction(() => {
                this.loading = false;
                this.isError = true;
                this.lists = [];
            })
        }
    }

    addList = async (name: string) => {
        try {
            const { data }: IAddItemResponse<IList> = await http.post('/lists', { name });
            runInAction(() => {
                this.lists = [data.data, ...this.lists];
            });
        } catch (e) {
            runInAction(() => {
                this.isError = true;
                this.lists = [];
            });
        }
    }

    deleteList = async (id: string) => {
        try {
            const { data }: IDeleteItemResponse = await http.delete(`/lists/${id}`);
            const newLists: IList[] = this.lists.filter(list => list._id !== data.id);
            runInAction(() => {
                this.lists = newLists;
            });
        } catch (e) {
            runInAction(() => {
                this.isError = true;
                this.lists = [];
            });
        }
    }

    addTask = async (name: string, listID: string) => {
        try {
            const { data }: IAddItemResponse<ICard> = await http.post('/card', { name, listID });
            const updatedLists: IList[] = this.lists.map(list => {
                if (listID === list._id) {
                    return { ...list, cards: [data.data, ...list.cards] }
                }
                return list;
            })
            runInAction(() => {
                this.lists = updatedLists;
            });
        } catch (e) {
            runInAction(() => {
                this.isError = true;
                this.lists = [];
            });
        }
    }

    deleteTask = async (id: string, listID: string) => {
        try {
            const { data }: IDeleteItemResponse = await http.delete(`/card/${id}?listID=${listID}`);
            const newLists: IList[] = this.lists.map(list => {
                if (list._id === listID) {
                    return { ...list, cards: list.cards.filter(card => card._id !== data.id) }
                }
                return list;
            });
            runInAction(() => {
                this.lists = newLists;
            });
        } catch (e) {
            runInAction(() => {
                this.isError = true;
                this.lists = [];
            });
        }

    }

    changeListOfTask = async (listID: string) => {
        try {
            const { data }: IAddItemResponse<ICard> = await http.put('/card/status', {
                listID,
                id: this.draggingTaskID,
                previousListID: this.draggingFromListID
            });

            const updatedLists = this.lists.map(list => {
                if (list._id === this.draggingFromListID) {
                    return { ...list, cards: list.cards.filter(card => card._id !== this.draggingTaskID) }
                }
                if (list._id === listID) {
                    return { ...list, cards: [data.data, ...list.cards] }
                }
                return list;
            })

            runInAction(() => {
                this.lists = updatedLists;
                this.sortCardsAscending();
            })

        } catch (e) {
            runInAction(() => {
                this.isError = true;
                this.lists = [];
            });
        }
    }

    setIDsOnDrag = (id: string, listID: string) => {
        runInAction(() => {
            this.draggingTaskID = id;
            this.draggingFromListID = listID;
        })
    }

    sortCardsAscending = () => {
        const updatedLists = this.lists.map(list => {
            const listCards = list.cards.slice();
            const updatedCards = listCards.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
            return { ...list, cards: updatedCards };
        });
        runInAction(() => {
            this.lists = updatedLists;
        });
    }

    sortCardsDescending = () => {
        const updatedLists = this.lists.map(list => {
            const listCards = list.cards.slice();
            const updatedCards = listCards.sort((a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime());
            return { ...list, cards: updatedCards };
        });
        runInAction(() => {
            this.lists = updatedLists;
        })
    }

}


