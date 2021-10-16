var items = 0
TodoList = []
todo_cnt = 0

function createNewToDo(text)
{
    TodoList.push(text)
    console.log(TodoList)
    todo = document.getElementById("todo-list")
    new_item = document.createElement("li")
    new_item.classList.add("todo-app__item")

    // Every item has three child : checkbox, item-detail, item-x
    new_checkbox = document.createElement("div")
    new_checkbox.classList.add("todo-app__checkbox")

    box_input = document.createElement("input")
    box_input.setAttribute("id", TodoList.length)
    box_input.setAttribute("type", "checkbox")

    box_label = document.createElement("label")
    box_label.setAttribute("for", TodoList.length)

    new_checkbox.appendChild(box_input)    
    new_checkbox.appendChild(box_label)
    

    new_detail = document.createElement("h1")
    new_detail.classList.add("todo-app__item-detail")
    new_detail.textContent = TodoList[TodoList.length -1]

    new_x = document.createElement("img")
    new_x.classList.add("todo-app__item-x")
    new_x.src = "./img/x.png"

    new_item.appendChild(new_checkbox)
    new_item.appendChild(new_detail)
    new_item.appendChild(new_x)

    todo.appendChild(new_item)

    box_input.addEventListener("click", function(){
        detail = this.parentNode.nextSibling
        // console.log(detail)
        if (detail.style.textDecoration === "line-through")
        {
            detail.style.textDecoration = "none"
            detail.style.opacity = 1
            todo_cnt = todo_cnt + 1
            total = document.getElementsByClassName("todo-app__total")[0]
            total.textContent = `${todo_cnt} left`
        }
        else
        {
            detail.style.textDecoration = "line-through"
            detail.style.opacity = 0.5
            todo_cnt = todo_cnt - 1
            total = document.getElementsByClassName("todo-app__total")[0]
            total.textContent = `${todo_cnt} left`
        }

        
    })

    if (TodoList.length == 1)
    {
        createFooter()
    }

    todo_cnt = todo_cnt + 1
    total = document.getElementsByClassName("todo-app__total")[0]
    total.textContent = `${todo_cnt} left`
}

function createFooter()
{
    footer = document.createElement("footer")
    footer.classList.add("todo-app__footer")

    total = document.createElement("div")
    total.classList.add("todo-app__total")
    total.textContent = `${TodoList.length} left`

    view_button = document.createElement("ul")
    view_button.classList.add("todo-app__view-buttons")

    view_all = document.createElement("li")
    all = document.createElement("button")
    all.textContent = "All"
    view_all.appendChild(all)

    view_active = document.createElement("li")
    active = document.createElement("button")
    active.textContent = "Active"
    view_active.appendChild(active)

    view_completed = document.createElement("li")
    completed = document.createElement("button")
    completed.textContent = "Completed"
    view_completed.appendChild(completed)

    view_button.appendChild(view_all)
    view_button.appendChild(view_active)
    view_button.appendChild(view_completed)

    clean = document.createElement("div")
    clean.classList.add("todo-app__clean")
    clean_button = document.createElement("button")
    clean_button.textContent = "Clear completed"
    clean.appendChild(clean_button)

    footer.appendChild(total)
    footer.appendChild(view_button)
    footer.appendChild(clean)

    document.getElementById("root").appendChild(footer)
}


const input = document.getElementById("todo-input")

input.addEventListener("keyup", event =>{
    if (event.key === 'Enter'){
        const newToDo = createNewToDo(input.value)
        input.value = ''
    }
});