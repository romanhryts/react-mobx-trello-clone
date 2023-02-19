import { IList } from 'src/types';

export interface IRootStore {
    loading: boolean;
    isError: boolean;
    lists: IList[];
    draggingTaskID: string | null;
    draggingFromListID: string | null;

    getLists: () => void;
    addList: (name: string) => void;
    deleteList: (id: string) => void;

    addTask: (name: string, listID: string) => void;
    deleteTask: (id: string, listID: string) => void;
    changeListOfTask: (listID: string) => void;
    sortCardsAscending: () => void;

    sortCardsDescending: () => void;
    setIDsOnDrag: (id: string, listID: string) => void;
}
