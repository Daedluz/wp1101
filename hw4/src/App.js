// import logo from './logo.svg';
// import './App.css';
import AppHeader from './header';
import React from 'react';
import AppMain from './main';
import AppInput from './main';
import {TodoFooter} from './main';

export default class App extends React.Component
{
  render()
  {
    return (
      <div id="root" className="todo-app__root">
        <AppHeader />
        <AppMain/>
        <TodoFooter/>
      </div>
      
    )
  }
};
