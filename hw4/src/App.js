// import logo from './logo.svg';
// import './App.css';
import AppHeader from './header';
import React from 'react';
import AppMain from './main';
import AppInput from './main';
import {TodoFooter} from './main';
import {todo_cnt} from './main';

export default class App extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {todoCnt : 0}
  };
  setCnt(e)
  {
    this.setState({todoCnt : e})
  }
  render()
  {
    if (todo_cnt === 0)
    {
      return (
        <div id="root" className="todo-app__root">
          <AppHeader />
          <AppMain setCnt={this.setCnt.bind(this)}/>
        </div>
        
      )
    }
    
    else
    {
      return (
        <div id="root" className="todo-app__root">
          <AppHeader />
          <AppMain setCnt={this.setCnt.bind(this)}/>
          <TodoFooter/>
        </div>
        
      )
    }
  }
};
