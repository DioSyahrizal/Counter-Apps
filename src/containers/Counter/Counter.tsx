import React from 'react';
import { connect } from 'react-redux';
import {
    increment ,
    decrement,
    add,
    substract,
    store_result,
    delete_result
    } from '../../store/action'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';


interface IProps {
    ctr: number,
    storedResult: [{
        id: string,
        val: number
    }],
    onIncrementCounter: ()=>void,
    onDecrementCounter: ()=>void,
    onAddCounter: ()=>void,
    onSubstract: ()=>void,
    onStoreResult: (counter: number)=>void,
    onDeleteResult: (id: string) => void
}

class Counter extends React.Component <IProps> {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstract}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResult.map((strResult: { id: string; val: number }) => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.val}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

function getCounter(counterState: { counter: number, result: any }) {
    return counterState.counter
}

function getResult(counterState: { counter: number, result: any }) {
    return counterState.result
}

const mapStateToProps = (state: { counter: number, result: any }) => {
    return {
        ctr: getCounter(state),
        storedResult: getResult(state)
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
    onStoreResult: store_result,
    onDeleteResult: delete_result
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);