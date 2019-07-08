import { CounterState } from "./types";

export function getCounter(state: CounterState) {
    return state.counter;
}

export function getResult(state: CounterState) {
    return state.result;
}
