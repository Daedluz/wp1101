// import logo from './logo.svg';
// import './App.css';
import AppHeader from './header';
import React, {useState, useEffect} from 'react';
import AppMain from './main';
import {TodoFooter} from './main';

export default function App ()
{
  const [TodoList, setTodoList] = useState([])
  const [FilteredList, setFilterList] = useState([])
  const [mode, setMode] = useState('All')

  const handleFilter = () => {
    if (mode === 'All')
    {
      setFilterList(TodoList)
    }
    else if (mode === 'Active')
    {
      setFilterList(TodoList.filter((todo) => todo.completed === false))
    }
    else if (mode === 'Completed')
    {
      setFilterList(TodoList.filter((todo) => todo.completed === true))
    }
  }

  useEffect(handleFilter, [mode, TodoList])
  
  if (FilteredList.length === 0)
  {
    return (
      <div id="root" className="todo-app__root">
        <AppHeader />
        <AppMain TodoList={TodoList} setTodoList={setTodoList} FilteredList={FilteredList}/>
      </div>
      
    )
  }

  
  else
  {
    return (
      <div id="root" className="todo-app__root">
        <AppHeader />
        <AppMain TodoList={TodoList} setTodoList={setTodoList} FilteredList={FilteredList}/>
        <TodoFooter cnt={FilteredList.length} setMode={setMode} TodoList={TodoList} setTodoList={setTodoList}/>
      </div>
      
    )
  }
  
};
