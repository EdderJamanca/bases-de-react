import React from 'react'

const TodoListItem = ({todo,index,handDelete, handleToggle}) => {
    return (
        <li key={ todo.id }
        className="list-group-item ">

            <p onClick={()=>handleToggle(todo.id)}
            className={`${(todo.done===true )&& 'complete'}`}
            >{index+1} - { todo.desc }</p>

            <button 
            onClick={()=>handDelete( todo.id )}
            className="btn btn-danger">
                Borrar
            </button>
            
        </li>     
    )
}

export default TodoListItem
