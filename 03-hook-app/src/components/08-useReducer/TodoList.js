import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({todos,handDelete, handleToggle}) => {


    return (
            <ul className="list-group">

                {
                    todos.map( (todo, index)=>(

                        <TodoListItem 
                        key={todo.id}
                        todo={todo}
                        index={index}
                        handDelete={handDelete}
                        handleToggle={handleToggle}

                         />

                    ))
                }

            </ul>
    )
}

export default TodoList
