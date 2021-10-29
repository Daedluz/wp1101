import React, { useState } from "react";
import "./App.css"
import Ximage from "./img/x.png"


export default function AppMain({TodoList, setTodoList})
{
    
    // const [inputEntry, setInputEntry] = useState("")

    const handleKeyDown = (event) => {
        if (event.keyCode === 13 && event.target.value !== ""){
            console.log("Enter pressed")
            setTodoList([...TodoList, {text: event.target.value, completed: false, id: Date.now()}])
        }

    };

    return(
        <section className="todo-app__main">
            <input type="text" onKeyDown={handleKeyDown} id="todo-input" className="todo-app__input" placeholder="What needs to be done?" />
            <ul className="todo-app__list" id="todo-list">
                {TodoList.map((e) => <AppItem text={e.text} itemId={e.id} key={e.id} todoList={TodoList} todo={e} setTodoList={setTodoList}/>)}
            </ul>
        </section>
    )

        
    
}
// this.handleChecked.bind(this)
function AppItem ({text, itemId, todoList, todo, setTodoList})
{

    const handleChecked = () => {
        console.log("clicked!")
        setTodoList(todoList.map((e) => {
            if(e.id === itemId){
                return{
                    ...e, completed: !e.completed
                }         
            }
            return e
        }))  
        
    };

    const deleteItem = () => {
        setTodoList(todoList.filter(function(ele) {return ele.id !== todo.id}))
    }

    return(
        <li className="todo-app__item">
            <div className="todo-app__checkbox">
                <input id={itemId}  type="checkbox" onClick={handleChecked}/>
                <label htmlFor={itemId}/>
            </div>
            <h1 className={todo.completed ? `todo-app__item-detail todo-app__item-checked` : `todo-app__item-detail`}>{text}</h1>
            <img src={Ximage} className="todo-app__item-x" alt="" onClick={deleteItem}/>
        </li>
    )
};


{/* <li><button onClick={setMode('All')}>All</button></li>
<li><button onClick={setMode('Active')}>Active</button></li>
<li><button onClick={setMode('Completed')}>Completed</button></li> */}

export function TodoFooter({cnt, setMode})
{
    return(
        <footer className="todo-app__footer" id="todo-footer">
            <div className="todo-app__total">{cnt} left</div>
            <ul className="todo-app__view-buttons">
                <li><button>All</button></li>
                <li><button>Active</button></li>
                <li><button>Completed</button></li>
            </ul>
            <div className="todo-app__clean">
                <button>Clear completed</button>
            </div>
        </footer>
    )
};