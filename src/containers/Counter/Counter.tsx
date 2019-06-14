import React from 'react';
import { connect } from 'react-redux';
import {
    increment ,
    decrement,
    add,
    substract,
    fetch_request,
    store_request,
    delete_request
} from '../../store/counter/action'
import { getCounter, getResult } from '../../store/counter/selector'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { Result } from '../../store/counter/types';

interface IProps {
    ctr: number,
    storedResult: Result[],
    onIncrementCounter: typeof increment,
    onDecrementCounter: typeof decrement,
    onAddCounter: typeof add,
    onSubstract: typeof substract,
    fetch_request: typeof fetch_request,
    onStoreRequest: typeof store_request,
    onDeleteRequest: typeof delete_request
}

class Counter extends React.Component <IProps> {
    componentDidMount = () => {
      this.props.fetch_request();
    };

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstract}  />
                <hr/>
                <button onClick={() => this.props.onStoreRequest({id: Date(), val: this.props.ctr})}>Store Result</button>
                <ul>
                    {this.props.storedResult.map((strResult: { id: string; val: number }, index) => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteRequest(index)}>{strResult.val}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        ctr: getCounter(state.data),
        storedResult: getResult(state.data)
    }
}

// const mapDispatchToProps = (dispatch: { (arg0: { type: string; }): void; (arg0: { type: string; }): void; (arg0: { type: string; val: number; }): void; (arg0: { type: string; val: number; }): void; (arg0: { type: string; }): void; (arg0: { type: string; resultID: any; }): void; }) => {
//     return {
//         onIncrementCounter: increment,
//         onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
//         onAddCounter: () => dispatch({type: actionTypes.ADD, val: 10}),
//         onSubstract: () => dispatch({type: actionTypes.SUBSTRACT, val: 10}),
//         onStoreResult: () => dispatch({type: actionTypes.STORE_RESULT}),
//         onDeleteResult: (id: any) => dispatch({type: actionTypes.DELETE_RESULT, resultID: id}),
//     }
// }

const mapDispatchToProps = {
    onIncrementCounter: increment,
    onDecrementCounter: decrement,
    onAddCounter: add,
    onSubstract: substract,
    fetch_request: fetch_request,
    onStoreRequest: store_request,
    onDeleteRequest: delete_request
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);