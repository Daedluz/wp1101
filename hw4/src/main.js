import React from "react";
import "./App.css"
import Ximage from "./img/x.png"

var items = 0
var TodoList = []
var todo_cnt = 0

export default class AppMain extends React.Component
{
    render()
    {
        return(
            <section className="todo-app__main">
                <AppInput/>
                <ul className="todo-app__list" id="todo-list">
                    <AppItem/>
                </ul>
            </section>
        );
    }
}

class AppInput extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {inputEntry : ""}
    };

    handleKeyDown = (event) => {
        if (event.key === 'Enter'){
            // const newToDo = createNewToDo(input.value)
            console.log(this.state.inputEntry)
            TodoList.push(this.state.inputEntry)
            todo_cnt = todo_cnt + 1
            this.setState({inputEntry : ''})
        }
    };

    componentDidMount = () =>
    {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    render()
    {
        return (
            <input type="text" value={this.state.inputEntry} onChange={(e) => this.setState({inputEntry : e.target.value})} id="todo-input" className="todo-app__input" placeholder="What needs to be done?" />
        );
    }
}

export class AppItem extends React.Component
{
    render()
    {
        return(
            <li className="todo-app__item">
                <ItemCheckbox />
                <ItemDetail text={this.props.todo_text}/>
                <ItemX/>
            </li>
        )
    }
};

export class ItemCheckbox extends React.Component
{
    handleChecked()
    {

    }

    render()
    {
        return (
            <div className="todo-app__checkbox">
                <input id="2" type="checkbox" onClick={this.handleChecked}/>
                <label htmlFor="2"/>
            </div>
        )
    }
};

export class ItemDetail extends React.Component
{
    render()
    {
        return (
            <h1 className="todo-app__item-detail">{this.props.text}</h1>
        )
    }
};

export class ItemX extends React.Component
{
    render()
    {
        return (<img src={Ximage} className="todo-app__item-x" />)
        // https://imgur.com/bM4YjWF
    }
};

export class TodoFooter extends React.Component
{
    render()
    {
        return(
            <footer className="todo-app__footer" id="todo-footer">
                <FooterTotal/>
                <FooterViewItems/>
                <FooterClean/>
            </footer>
        )
        
    }
};

class FooterViewItems extends React.Component
{
    render()
    {
        return(
            <ul className="todo-app__view-buttons">
                <li><buttton>All</buttton></li>
                <li><buttton>Active</buttton></li>
                <li><buttton>Completed</buttton></li>
            </ul>
        )
    }
};

class FooterTotal extends React.Component
{
    render()
    {
        return (<div className="todo-app__total">{todo_cnt} left</div>)
    }
};

class FooterClean extends React.Component
{
    render()
    {
        return (
            <div className="todo-app__clean">
                <button>Clear completed</button>
            </div>
        )
    }
};