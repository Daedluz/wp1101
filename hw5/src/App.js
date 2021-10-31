import { useState } from 'react';
import './App.css';
import Buttons from './Components/buttons'
import Display_bar from './Components/display_bar';

function App() {
  const [current_input, setCurrent_input] = useState(0)
  const [total_input, SetTotal_input] = useState("")

  return (
    <div className="App">
      <Display_bar current_input={current_input} total_input={"99 + 1"}/>
      <Buttons/>
    </div>
  );
}

export default App;
