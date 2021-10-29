// import logo from './logo.svg';
// import './App.css';
import AppHeader from './header';
import React, {useState, useEffect} from 'react';
import AppMain from './main';
import {TodoFooter} from './main';

export default function App ()
{
  const [TodoList, setTodoList] = useState([])
  // const [BackupList, setBackupList] = useState([])
  // const [mode, setMode] = useState('All')

  // useEffect(() => {
  //   if (mode === 'All')
  //   {
  //     setTodoList(BackupList)
  //   }
  //   else if (mode === 'Active')
  //   {
  //     setBackupList(TodoList)
  //     setTodoList(TodoList.filter((todo) => todo.completed === false))
  //   }
  //   else if (mode === 'Completed')
  //   {
  //     setBackupList(TodoList)
  //     setTodoList(TodoList.filter((todo) => todo.completed === true))
  //   }
  // }, [mode])
  
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
