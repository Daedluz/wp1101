import React, {useState} from 'react'
import '../App.css'

export default function Buttons ()
{
    return (
        <div className="buttons">
            <button className="arithmetic">log</button>
            <button className="arithmetic">exp</button>
            <button className="arithmetic">mod</button>
            <button className="arithmetic">←</button>

            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className="arithmetic">÷</button>

            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button className="arithmetic">×</button>

            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className="arithmetic">-</button>

            <button>.</button>
            <button>0</button>
            <button className="equal">=</button>
            <button className="arithmetic">+</button>
        </div>
    )
}