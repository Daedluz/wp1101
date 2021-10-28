import React from "react";
import "./App.css"
import Ximage from "./img/x.png"

var items = 0
var TodoList = [] 
export var todo_cnt = 0
var id_cnt = 0

export default class AppMain extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {TodoList : []}
    };

    setTodo(e) 
    {
        this.setState({TodoList: [...this.state.TodoList, e]})
        todo_cnt = todo_cnt + 1
    }

    createNewItem (e) 
    {
        id_cnt = id_cnt + 1
        return <AppItem text={e} itemId={id_cnt}/>
    }

    render()
    {
        if (this.state.TodoList.length === 0)
        {
            return(
                <section className="todo-app__main">
                    <AppInput setCnt={this.props.setCnt} setTodo={this.setTodo.bind(this)}/>
                </section>
            )
        }
        else
        {
            return(
                <section className="todo-app__main">
                    <AppInput setCnt={this.props.setCnt} setTodo={this.setTodo.bind(this)}/>
                    <ul className="todo-app__list" id="todo-list">
                        {this.state.TodoList.map((e) => <AppItem text={e} key={this.props.text}/>)}
                    </ul>
                </section>
            )
        }
        
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
            TodoList.push(this.state.inputEntry)
            this.props.setTodo(this.state.inputEntry)
            this.props.setCnt(todo_cnt)
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
// this.handleChecked.bind(this)
export class AppItem extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {checked: false}
    };

    handleChecked = () =>
    {
        this.setState({checked: !this.state.checked})
        console.log(this.props.text)
    };
    render()
    {
        return(
            <li className="todo-app__item">
                <ItemCheckbox clicked={this.handleChecked} text={this.props.text}/>
                <ItemDetail text={this.props.text} checked={this.state.checked} />
                <ItemX/>
            </li>
        )
    }
};

export class ItemCheckbox extends React.Component
{
    render()
    {
        return (
            <div className="todo-app__checkbox">
                <input id="2"  type="checkbox" onClick={this.props.clicked}/>
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
            <h1 className={this.props.checked ? `todo-app__item-detail todo-app__item-checked` : `todo-app__item-detail`}>{this.props.text}</h1>
        )
    }
};

export class ItemX extends React.Component
{
    render()
    {
        return (<img src={Ximage} className="todo-app__item-x" />)
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
                <li><button>All</button></li>
                <li><button>Active</button></li>
                <li><button>Completed</button></li>
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