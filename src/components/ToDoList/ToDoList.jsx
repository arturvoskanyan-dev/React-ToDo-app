import { useState } from "react"
import bin from "../../assets/bin.png"
import pencil from "../../assets/pencil.png"
import checkbox from "../../assets/checkbox.png"
import "./TodoList.css"

const ToDoList = ({ todo, changeList, removeList, editText }) => {
    const [edit, setEdit] = useState(true);
    const [newTitle, setNewTitle] = useState(todo.title);

    return (
        <li className="list-item" key={todo.id}>
            <input type="checkbox" checked={todo.isDone} onChange={() => changeList(todo.id)} />
            {edit ?
                <span onDoubleClick={() => setEdit(false)}>{todo.title}</span> :
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
            }
            {
                !edit ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        editText(todo.id, newTitle);
                        setEdit(true);
                        }}><img src={checkbox} />
                    </button> 

                    : <button onClick={(e) => {
                        e.preventDefault(); 
                        setEdit(false)}}>
                        <img src={pencil} />
                    </button>
            }
            <button onClick={() => removeList(todo.id)}><img src={bin} /></button>
        </li>
    )
}

export default ToDoList