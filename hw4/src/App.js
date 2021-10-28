// import logo from './logo.svg';
// import './App.css';
import AppHeader from './header';
import React, {useState} from 'react';
import AppMain from './main';
import {TodoFooter} from './main';

export default function App ()
{
  const [TodoList, setTodoList] = useState([])
  
  if (TodoList.length === 0)
  {
    return (
      <div id="root" className="todo-app__root">
        <AppHeader />
        <AppMain TodoList={TodoList} setTodoList={setTodoList}/>
      </div>
      
    )
  }
  
  else
  {
    return (
      <div id="root" className="todo-app__root">
        <AppHeader />
        <AppMain TodoList={TodoList} setTodoList={setTodoList}/>
        <TodoFooter cnt={TodoList.length}/>
      </div>
      
    )
  }
  
};
