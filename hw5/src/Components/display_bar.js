import React, {useState} from 'react'
import '../App.css'

export default function Display_bar({current_input, total_input})
{
    return (
        <>
        <h2 className="display_bar">{total_input}</h2>
        <h1 className="display_bar">{current_input}</h1>
        </>
    )
}