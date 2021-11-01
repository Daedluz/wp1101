import React, {useState} from 'react'
import '../App.css'

export default function Buttons ({numberclicked, delClicked, operatorClicked, equalClicked, logClicked, clear})
{
    return (
        <div className="buttons">
            <button className="arithmetic">MR</button>
            <button className="arithmetic">MC</button>
            <button className="arithmetic">M+</button>
            <button className="arithmetic" onClick={clear}>CE</button>

            <button className="arithmetic" onClick={logClicked}>log</button>
            <button className="arithmetic" onClick={(e) => operatorClicked(e)}>exp</button>
            <button className="arithmetic" onClick={(e) => operatorClicked(e)}>mod</button>
            <button className="arithmetic" onClick={delClicked}>←</button>

            <button onClick={(e) => numberclicked(e)}>1</button>
            <button onClick={(e) => numberclicked(e)}>2</button>
            <button onClick={(e) => numberclicked(e)}>3</button>
            <button className="arithmetic" onClick={(e) => operatorClicked(e)}>÷</button>

            <button onClick={(e) => numberclicked(e)}>4</button>
            <button onClick={(e) => numberclicked(e)}>5</button>
            <button onClick={(e) => numberclicked(e)}>6</button>
            <button className="arithmetic" onClick={(e) => operatorClicked(e)}>×</button>

            <button onClick={(e) => numberclicked(e)}>7</button>
            <button onClick={(e) => numberclicked(e)}>8</button>
            <button onClick={(e) => numberclicked(e)}>9</button>
            <button className="arithmetic" onClick={(e) => operatorClicked(e)}>-</button>

            <button onClick={(e) => numberclicked(e)}>.</button>
            <button onClick={(e) => numberclicked(e)}>0</button>
            <button className="equal" onClick={() => equalClicked()}>=</button>
            <button className="arithmetic" onClick={(e) => operatorClicked(e)}>+</button>
        </div>
    )
}