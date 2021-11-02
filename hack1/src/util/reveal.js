/****************************************************************************
  FileName      [ reveal.js ]
  PackageName   [ src/util ]
  Author        [ Cheng-Hua Lu, Chin-Yi Cheng ]
  Synopsis      [ This file states the reaction when left clicking a cell. ]
  Copyright     [ 2021 10 ]
****************************************************************************/

export const revealed = (board, x, y, newNonMinesCount) => {
    {/* -- TODO 4-2 -- */}
    {/* Useful Hint: If the cell is already revealed, do nothing. */}
    {/* Useful Hint: If the value of the cell is not 0, only show the cell value. */}

    {/* -- TODO 4-2 -- */}
    {/* Useful Hint: If the value of the cell is 0, we should try to find the value of adjacent cells until the value we found is not 0. */}
    {/* Useful Hint: The input variables 'newNonMinesCount' and 'board' may be changed in this function. */}

    if (board[x][y].revealed || board[x][y].flagged) //already revealed
    {
      return {board, newNonMinesCount};
    }

    if (board[x][y].value === '💣')
    {
      board[x][y].revealed = true
      return {board, newNonMinesCount};
    }

    if (board[x][y].value !== 0)
    {
      board[x][y].revealed = true
      newNonMinesCount = newNonMinesCount + 1
    }
    else
    {
      board[x][y].revealed = true
      newNonMinesCount = newNonMinesCount + 1
      for (let m=-1; m<=1; m++)
      {
        for (let n=-1; n<=1; n++)
        {
          // console.log(m, n)
          if (m===0 && n===0)
          {
            // console.log("same spot")
            continue
          }
          else 
          {
            if (x+m >= 0 && x+m <board.length && y+n >= 0 && y+n < board.length)
            {
              revealed(board, x+m, y+n, newNonMinesCount)
            }
          }
        }
      }
    }

    
    

    
    
    return {board, newNonMinesCount};
};
