import { useState } from 'react';
import './App.css';
import Buttons from './Components/buttons'
import Display_bar from './Components/display_bar';

function App() {
  const [current_input, setCurrent_input] = useState(0)
  const [total_input, setTotal_input] = useState("")

  function numberclicked(e)
  {
    // console.log(e.target)
    setCurrent_input(current_input * 10 + parseInt(e.target.innerText))
    setTotal_input(current_input * 10 + parseInt(e.target.innerText))
  }

  function delClicked()
  {
    setCurrent_input(Math.floor(current_input/10))
    setTotal_input(Math.floor(current_input/10))
  }

  function operatorClicked(e)
  {
    if (total_input.slice(-1))
    setCurrent_input(0)
    setTotal_input(total_input + current_input.toString() + " " + e.target.innerText);
  }

  return (
    <div className="App">
      <Display_bar current_input={current_input} total_input={total_input}/>
      <Buttons numberclicked={numberclicked} delClicked={delClicked} operatorClicked={operatorClicked}/>
    </div>
  );
}

export default App;
