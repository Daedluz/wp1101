import React, {useState} from 'react'
import '../App.css'

export default function Buttons ({numberclicked, delClicked, operatorClicked})
{
    return (
        <div className="buttons">
            <button className="arithmetic" onClick={console.log(parseInt("×"))}>log</button>
            <button className="arithmetic" onClick={console.log(1)}>exp</button>
            <button className="arithmetic" onClick={console.log(1)}>mod</button>
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

            <button>.</button>
            <button onClick={(e) => numberclicked(e)}>0</button>
            <button className="equal">=</button>
            <button className="arithmetic" onClick={(e) => operatorClicked(e)}>+</button>
        </div>
    )
}