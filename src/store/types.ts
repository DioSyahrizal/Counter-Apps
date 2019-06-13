export enum CounterActionTypes {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    ADD = 'ADD',
    SUBSTRACT = 'SUBSTRACT',
    STORE_RESULT = 'STORE_RESULT',
    DELETE_RESULT = 'DELETE_RESULT',
}

interface Result {
    id: string
    val: number
}

export interface CounterState {
    counter: number,
    result: Result[]
}