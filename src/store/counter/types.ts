export enum CounterActionTypes {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
    ADD = "ADD",
    SUBSTRACT = "SUBSTRACT",
    FETCH_REQUEST = "FETCH_REQUEST",
    FETCH_RESULT = "FETCH_RESULT",
    STORE_REQUEST = "STORE_REQUEST",
    STORE_RESULT = "STORE_RESULT",
    DELETE_REQUEST = "DELETE_REQUEST",
    DELETE_RESULT = "DELETE_RESULT",
}

export interface Result {
    id: string;
    val: number;
}

export interface CounterState {
    counter: number;
    result: Result[];
}
