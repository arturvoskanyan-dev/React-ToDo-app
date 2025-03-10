import "./ToDoFooter.css"

const ToDoFooter = ({ tasks, clearAll }) => {
    return (
        <div className="todo-footer">
            <span>You have {tasks} tasks</span>
            {tasks ? <button onClick={clearAll}>Clear All</button> : null}
        </div>
    )
}

export default ToDoFooter
