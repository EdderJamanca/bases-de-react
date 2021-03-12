
import React, { useEffect, useReducer } from 'react';
import './style.css';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import { todoReduce } from './todoReduce';

// es el valor inicial q recibe el useReduce
const init =()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id:new Date().getTime(),
    //     desc:'Aprender React',
    //     done:false
    // }];
}

const TodoApp = () => {
    
    const [ todos, dispatch ] = useReducer(todoReduce,[], init);


    // tachar lista
    const handleToggle =(todoId)=>{
        console.log(todoId);
        dispatch({
            type:'toggle',
            payload:todoId
        })
    }
    // eliminar una lista
    const handDelete =(id1)=>{
        

        const action ={
            type:'delete',
            payload:id1
        };
        dispatch(action);

    }
    // agrgar cuando presinamos un submit
    const handleAddTodo =(newTodo)=>{
        
        dispatch({
            type:'add',
            payload:newTodo
        });
    }

    // guardar en el loal Storage
    useEffect( ()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])
    // agrgar al objeto
 

    return (
        <>
            <h1>TodoApp { todos.length} </h1>
            <hr/>

            <div className="row">

                <div className="col-md-7">

                    <TodoList todos={todos}
                        handDelete={handDelete}
                        handleToggle={handleToggle}

                    />

                </div>
            
                <div className='col-md-5'>
                    
                    <TodoAdd 
                        handleAddTodo={handleAddTodo}
                    />

                </div>
            
            </div>


        </>
    )
}

export default TodoApp
