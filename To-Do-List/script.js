//https://jsonplaceholder.typicode.com/todos?_limit=5  限制数量

let apiUrl = 'https://jsonplaceholder.typicode.com/todos'
let todoCounter; 

let getTodos = () => {
    fetch(apiUrl + '?_limit=10')
        .then(res => res.json())
        .then(data=>{
            //console.log(data)
            todoCounter = Math.max(...data.map(todo => todo.id)) + 1;
            data.forEach((todo) =>{
                addTodoToDOM(todo)
            })
        })
}

let addTodoToDOM = (todo) =>{
    let div = document.createElement('div')
    div.classList.add('todo')  //toggleCompleted中使用，避免点击模块空白处整体变色
    div.appendChild(document.createTextNode(todo.title))
    div.setAttribute('data-id', todo.id)  //加id
    if(todo.completed){
        div.classList.add('done')  //加class
    }
    document.getElementById('todo-list').appendChild(div)
}

let createTodo = (e)=>{
    e.preventDefault()
    //console.log(e.target.firstElementChild.value)
    let newTodo = {
        id: todoCounter++,
        title: e.target.firstElementChild.value,
        completed: false
    }

    fetch(apiUrl,{
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data =>{
            addTodoToDOM(newTodo)
        })
}

let toggleCompleted = (e) =>{
    if(e.target.classList.contains('todo')){
        e.target.classList.toggle('done')
        updateTodo(e.target.dataset.id, e.target.classList.contains('done'))
    }
}

let updateTodo = (id,completed) =>{
    //console.log(id, completed)
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({completed}),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(data=>console.log(data))
}

let deleteTodo = (e) =>{
     if(e.target.classList.contains('todo')){
        let id = e.target.dataset.id
        fetch(`${apiUrl}/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(()=>e.target.remove())
     }
}

let init = () =>{
    document.addEventListener('DOMContentLoaded', getTodos)
    document.querySelector('#todo-form').addEventListener('submit',createTodo)
    document.querySelector('#todo-list').addEventListener('click',toggleCompleted)
    document.querySelector('#todo-list').addEventListener('dblclick',deleteTodo)
}

init()
getTodos()