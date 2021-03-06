import { Reducer, combineReducers } from "redux";
import { CounterActionTypes, CounterState } from "./types";

const initialState: CounterState = {
    counter: 0,
    result: [],
};

const counter: Reducer<CounterState["counter"]> = (state = initialState.counter, { type, payload }) => {
    switch (type) {
        case CounterActionTypes.INCREMENT:
            return state + 1;
        case CounterActionTypes.DECREMENT:
            return state - 1;
        case CounterActionTypes.ADD:
            return state + payload;
        case CounterActionTypes.SUBSTRACT:
            return state - payload;
    }
    return state;
};

const result: Reducer<CounterState["result"]> = (state = initialState.result, { type, payload }) => {
    switch (type) {
        case CounterActionTypes.FETCH_RESULT:
            return payload;
        case CounterActionTypes.STORE_RESULT:
            //return payload;
            return state.concat(payload);
        case CounterActionTypes.DELETE_RESULT:
            return state.filter((item: { id: string }, index) => index !== payload);
    }
    return state;
};

const CounterReducer = combineReducers<CounterState>({
    counter,
    result,
});

export default CounterReducer;
