import { IList } from 'src/types/IList';

export interface IListsResponse {
    data: {
        message: string;
        data: IList[];
    }
}
