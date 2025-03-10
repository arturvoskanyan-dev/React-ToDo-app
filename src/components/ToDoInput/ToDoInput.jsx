import "./ToDoInput.css"

const ToDoInput = ({ text, changeText, addList, blur, changeBlur }) => {
  return (
    <div className={`todo-input ${blur ? "warner" : null}`}>
      <input type="text" value={text} onChange={changeText} onBlur={changeBlur} />
      <button onClick={addList}>Add</button>
      {blur ? <p>input vield is required</p> : null}
    </div>
  )
}

export default ToDoInput
