export interface IAddItemResponse<T> {
    data: {
        message: string;
        data: T;
    }
}
