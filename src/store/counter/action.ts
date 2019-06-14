import { action } from 'typesafe-actions'
import { CounterActionTypes , Result } from './types';

export const increment      = () => action(CounterActionTypes.INCREMENT);
export const decrement      = () => action(CounterActionTypes.DECREMENT);
export const add            = () => action(CounterActionTypes.ADD, 5);
export const substract      = () => action(CounterActionTypes.SUBSTRACT, 5);
export const fetch_request  = () => action(CounterActionTypes.FETCH_REQUEST);
export const fetch_result   = (result: Result[]) => action(CounterActionTypes.FETCH_RESULT, result);
export const store_request  = (result: Result) => action(CounterActionTypes.STORE_REQUEST, result);
export const store_result   = (result: Result) => action(CounterActionTypes.STORE_RESULT, result);
export const delete_request = (id: number) => action(CounterActionTypes.DELETE_REQUEST, id);
export const delete_result  = (id: number) => action(CounterActionTypes.DELETE_RESULT,id);
