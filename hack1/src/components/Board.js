/****************************************************************************
  FileName      [ Board.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu, Chin-Yi Cheng ]
  Synopsis      [ This file generates the Board. ]
  Copyright     [ 2021 10 ]
****************************************************************************/

import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import Modal from './Modal';
import Dashboard from './Dashboard';
import createBoard from '../util/createBoard';
import { revealed } from '../util/reveal';
import './css/Board.css'


const Board = ({ boardSize, mineNum, backToHome }) => {
    const [board, setBoard] = useState([]);                     // An 2-dimentional array. It is used to store the board.
    const [nonMineCount, setNonMineCount] = useState(0);        // An integer variable to store the number of cells whose value are not '💣'.
    const [mineLocations, setMineLocations] = useState([]);     // An array to store all the coordinate of '💣'.
    const [gameOver, setGameOver] = useState(false);            // A boolean variable. If true, means you lose the game (Game over).
    const [remainFlagNum, setRemainFlagNum] = useState(0);      // An integer variable to store the number of remain flags.
    const [win, setWin] = useState(false);                      // A boolean variable. If true, means that you win the game.

    useEffect(() => {
        // Calling the function
        freshBoard();
    }, []);

    useEffect(() => {
        // console.log("nonMineCount", nonMineCount)
        if (nonMineCount === boardSize*boardSize-mineNum)
        {
            console.log("You Won!!")
            setWin(true)
            setGameOver(true)
        }
    }, [nonMineCount])

    // Creating a board
    const freshBoard = () => {
        {/* -- TODO 3-1 -- */}
        {/* Useful Hint: createBoard(...) */}
        var value = createBoard(boardSize, mineNum);
        setRemainFlagNum(mineNum)
        setBoard(value.board)
        setMineLocations(value.mineLocations)
        
    }

    const restartGame = () => {
        {/* -- TODO 5-2 -- */}
        {/* Useful Hint: freshBoard() */}
        setGameOver(false)
        setWin(false)
        freshBoard()
        
    }

    // On Right Click / Flag Cell
    const updateFlag = (e, x, y) => {
        // To not have a dropdown on right click
        e.preventDefault();
        // Deep copy of a state
        {/* -- TODO 3-2 -- */}
        {/* Useful Hint: A cell is going to be flagged. 'x' and 'y' are the xy-coordinate of the cell. */}
        {/* Reminder: If the cell is already flagged, you should unflagged it. Also remember to update the board and the remainFlagNum. */}
        {/* Reminder: The cell can be flagged only when it is not revealed. */}
        let board_copy = board
        if (board_copy[x][y].flagged)
        {
            board_copy[x][y].flagged = false
            setRemainFlagNum(remainFlagNum + 1)
        }
        else
        {
            if (board_copy[x][y].revealed === false && remainFlagNum > 0)
            {
                board_copy[x][y].flagged = true
                setRemainFlagNum(remainFlagNum - 1)
            }
        }
        setBoard(board_copy)
    };

    const revealCell = (x, y) => {
        {/* -- TODO 4-1 -- */}
        {/* Reveal the cell */}
        {/* Useful Hint: The function in reveal.js may be useful. You should consider if the cell you want to reveal is a location of mines or not. */}
        {/* Reminder: Also remember to handle the condition that after you reveal this cell then you win the game. */}

        if (board[x][y].value === '💣')
        {
            //reveal all bomb and end the game
            for (let i=0; i<mineLocations.length; i++)
            {
                var value = revealed(board, mineLocations[i][0], mineLocations[i][1], nonMineCount)
                setBoard(value.board)
                setNonMineCount(value.newNonMinesCount)
            }
            setGameOver(true)
        }
        else 
        {
            var value = revealed(board, x, y, nonMineCount)
            setBoard(value.board)
            setNonMineCount(value.newNonMinesCount)
        }
        
    };
    // Cell({rowIdx, colIdx, detail, updateFlag, revealCell})
    // Dashboard({remainFlagNum, gameOver})
    return(
        <div className = 'boardPage' >
            <div className = 'boardWrapper' >
            {gameOver ? <Modal win={win} restartGame={restartGame} backToHome={backToHome}/> : ""}
            {/* <h1>This is the board Page!</h1>  This line of code is just for testing. Please delete it if you finish this function. */}
            
            {/* -- TODO 3-1 -- */}
            {/* Useful Hint: The board is composed of BOARDSIZE*BOARDSIZE of Cell (2-dimention). So, nested 'map' is needed to implement the board.  */}
            {/* Reminder: Remember to use the component <Cell> and <Dashboard>. See Cell.js and Dashboard.js for detailed information. */}
            <div className="boardContainer">
                <Dashboard remainFlagNum={remainFlagNum} gameOver={gameOver}/>
                {
                    board.map((row, x) => {
                        let str = `row${x}`
                        return (
                            <div id={str} style={{display: 'flex'}}>
                                {row.map((item, y) => {
                                    let str_id = `${x}-${y}`
                                    return (
                                        <Cell id={str_id} rowIdx={x} colIdx={y} detail={item} updateFlag={updateFlag} revealCell={revealCell}/>
                                    )
                                })}
                            </div>
                        )
                    })
                }
            </div>
            
            </div>
        </div>
    ); 

    

}

export default Board