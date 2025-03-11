import "./ToDoFooter.css"

const ToDoFooter = ({ tasks, clearAll, completedTasks }) => {
    return (
        <div className="todo-footer">
            <span>You have {tasks}/{completedTasks()} tasks</span>
            {tasks ? <button onClick={clearAll}>Clear All</button> : null}
        </div>
    )
}

export default ToDoFooter
