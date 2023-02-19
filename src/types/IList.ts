import { ICard } from 'src/types';

export interface IList {
    _id: string;
    name: string;
    cards: ICard[];
    createdAt: string;
    updatedAt: string;
}
