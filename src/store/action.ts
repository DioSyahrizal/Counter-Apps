import { action } from 'typesafe-actions'
import { CounterActionTypes } from './types';

export const increment      = () => action(CounterActionTypes.INCREMENT);
export const decrement      = () => action(CounterActionTypes.DECREMENT);
export const add            = () => action(CounterActionTypes.ADD, 5);
export const substract      = () => action(CounterActionTypes.SUBSTRACT, 5);
export const store_result   = (counter: number) => action(CounterActionTypes.STORE_RESULT, counter);
export const delete_result  = (id: string) => action(CounterActionTypes.DELETE_RESULT,id);
