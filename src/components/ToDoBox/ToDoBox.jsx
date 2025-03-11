import { useState } from "react";
import ToDoInput from "../ToDoInput/ToDoInput"
import ToDoList from "../ToDoList/ToDoList";
import ToDoFooter from "../ToDoFooter/ToDoFooter";
import "./toDoBox.css"

export default function ToDoBox() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");
    const [blur, setBlur] = useState(false);

    const changeText = (e) => {
        setText(e.target.value)
        setBlur(false)
    }

    const addList = (e) => {
        e.preventDefault()
        if(text.trim()) {
            setTodos(prev => {
                return [
                    ...prev,
                    {
                        id: Date.now(),
                        title: text,
                        isDone: false
                    }
                ]
            })
        } else if(!blur) {
            setBlur(true)
        }
        setText("")
    }

    const changeList = (id) => {
        setTodos(todos.map((todo) => {
            if(todo.id === id) {
                return {
                    ...todo,
                    isDone: !todo.isDone
                }
            } else {
                return todo
            }
        }))
    }

    const removeList = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const editText = (id, newTitle) => {
        setTodos(todos.map((todo) => {
            if(todo.id === id) {
                return {
                    ...todo,
                    title: newTitle
                }
            } else {
                return todo
            }
        }))
    }

    const clearAll = () => {
        setTodos([])
    }

    const changeBlur = () => {
        !text ? setBlur(true) : null
    }

    const completedTasks = () => {
        return todos.map((elem) => elem.isDone).filter((elem) => elem === true).length
    }

    return (
        <div className='todo-box'>
            <h1>To Do List</h1>
            <form>
                <ToDoInput 
                text={text} 
                changeText={changeText} 
                addList={addList} 
                blur={blur} 
                changeBlur={changeBlur} />
                
                <div className="todo-body">
                    <ul className="todo-list">
                        {
                            todos.map((todo) => <ToDoList todo={todo} 
                            key={todo.id} 
                            changeList={changeList}
                            removeList={removeList}
                            editText={editText} />)
                        }
                    </ul>

                    <ToDoFooter 
                    tasks={todos.length} 
                    clearAll={clearAll} 
                    completedTasks={completedTasks} />
                </div>
            </form>
        </div>
    )
}
