import React from 'react'

const Forms = ({ setInputText, setTodos, todos, inputText , setStatus}) => {
        //setting the value to the useState
    const inputTextHandler = (e) => setInputText (e.target.value);

    const submitHandler = (e) => {
        e.preventDefault(); //prevent reload

        if(inputText === ""){
            return; //Do not submit if inputText is empty
        }

        //create a new Todo list item
        setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 10}]);

        //Clear the input Text
        setInputText("");
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    



  return (
    <form action="">
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />

        <button onClick={submitHandler} className="todo-button" type='submit'>
            <i className="fas fa-plus-square"></i>
        </button>

        <div className="select">
            <select onChange={statusHandler} name="todos"  className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>

        </div>
    </form>
  )
}

export default Forms