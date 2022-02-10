import React, {useReducer, useState} from 'react';
import { Link } from 'react-router-dom';

const initialState = {count : 0, text: 'This is my initial text'}

const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        case 'zero':
            return {count: 0}
        case 'double' :
            return {count: state.count * 2}
        case 'half' :
            return {count: state.count / 2}
        case 'log' :
            console.log(eval(action.message))
            return {count: action.message}
        default:
            throw new Error()
    }
}

function HomeEm() {
    const [myValue, dispatch] = useReducer(reducer, initialState)
    const [input, setInput] = useState("")
    return (
        <div>
            <h1>Home Em</h1>
            <Link to='/'><h3>Look for jobs</h3></Link>
            {myValue.count}
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'half'})}>half</button>
            <button onClick={() => dispatch({type: 'double'})}>double</button>
            <button onClick={() => dispatch({type: 'zero'})}>zero</button>
            <input type="number" onChange={(e) => setInput(e.target.value) } />
            <button onClick={() => dispatch({type: 'log', message: input})}>log</button>
        </div>);
}

export default HomeEm;
