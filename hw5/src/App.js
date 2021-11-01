import { useState } from 'react';
import './App.css';
import Buttons from './Components/buttons'
import Display_bar from './Components/display_bar';

function App() {
  const [current_input, setCurrent_input] = useState("0")
  const [total_input, setTotal_input] = useState("")
  const [memory, setMemory] = useState(0)

  function numberclicked(e)
  {
    if (current_input.length >= 15)
    {
      console.log("Exceed max input length")
      return
    }

    if (current_input == "0")
    {
      setCurrent_input((e.target.innerText))
      setTotal_input(total_input + (e.target.innerText))
    }
    else
    {
      setCurrent_input(current_input + (e.target.innerText))
      setTotal_input(total_input  + (e.target.innerText))
    }

    // if (current_input.length > 15)
    // {
    //   setCurrent_input(parseFloat(current_input).toExponential())
    // }
    
  }

  function delClicked()
  {
    if (current_input.length === 1)
    {
      setCurrent_input("0")
    }
    else
    {
      setCurrent_input(current_input.slice(0, -1))
    }

    if (total_input.length === 0)
    {
      setTotal_input("")
    }
    else
    {
      setTotal_input(total_input.slice(0, -1))
    }
    
  }

  function operatorClicked(e)
  {
    if (total_input.length >= 2 && isNaN(parseFloat(total_input.slice(-2, -1))) && isNaN(parseFloat(total_input.slice(-1))) )
    {
      if (e.target.innerText === "mod")
      {
        setTotal_input(total_input.slice(0, -2) + "%" + " ")
        return
      }
      // console.log(total_input.slice(0, -3) + e.target.innerText + " ")
      setTotal_input(total_input.slice(0, -2) + e.target.innerText + " ")
      return
    }
    setCurrent_input("0")
    if (e.target.innerText.length === 3)
    {
      switch (e.target.innerText)
      {
        case "mod" :
          setTotal_input(total_input + " % ")
          break
        case "exp" :
          setTotal_input(total_input + " ^ ")
          break
      }
      
      return
    }
    setTotal_input(total_input + " " + e.target.innerText + " ");
  }

  function logClicked()
  {
    let result = Math.log10(parseFloat(current_input))
    setTotal_input("")
    setCurrent_input(result.toString())
  }

  function equalClicked()
  {
    let input_arr = total_input.split(/(\s+)/).filter((word) => word !== " " )
    console.log(input_arr)
    if (input_arr.length % 2 === 0)
    {
      return
    }
    var result = parseFloat(input_arr[0])
    for (let i=1; i<input_arr.length; i+=2)
    {
      switch(input_arr[i])
      {
        case "÷" :
          if (input_arr[i+1] === "0")
          {
            setTotal_input("")
            setCurrent_input("Divided by 0")
            return
          }
          result = result / parseFloat(input_arr[i+1])
          break
        case "×" :
          result = result * parseFloat(input_arr[i+1])
          break
        case "-" :
          result = result - parseFloat(input_arr[i+1])
          break
        case "+" :
          result = result + parseFloat(input_arr[i+1])
          break
        case "%" :
          result = result % parseFloat(input_arr[i+1])
          break
        case "^" :
          result = Math.pow(result, parseFloat(input_arr[i+1]))
          break
      }
    }
    // result = result.toPrecision(15)
    console.log(result)
    if (result.toString().length >= 15)
    {
      setTotal_input(result.toExponential())
      setCurrent_input(result.toExponential())
      return result
    }
    setTotal_input(result.toString())
    setCurrent_input(result.toString())
    return result
  }

  function clear()
  {
    setCurrent_input("0")
    setTotal_input("")
  }

  function memoryClicked(e)
  {
    switch(e.target.innerText)
    {
      case "M+":
        setMemory(current_input)
        break
      case "MR":
        setCurrent_input(memory)
        setTotal_input(total_input + memory.toString())
      case "MC":
        setMemory(0)
    }
  }

  return (
    <div className="App">
      <Display_bar current_input={current_input} total_input={total_input}/>
      <Buttons memoryClicked={memoryClicked} clear={clear} numberclicked={numberclicked} delClicked={delClicked} operatorClicked={operatorClicked} equalClicked={equalClicked} logClicked={logClicked}/>
    </div>
  );
}

export default App;
