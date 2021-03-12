import React from 'react'
import { useForm } from '../../hooks/useForm';

const TodoAdd = ({handleAddTodo}) => {

    const [ {description}, handleInputChange, reset]=useForm({
        description:''
    });

    const handleSubmit= (e) =>{
        e.preventDefault();
        if(description.trim().length<=1){
            return;
        }


        const newTodo ={
            id:new Date().getTime(),
            desc:description,
            done:false
        };
        handleAddTodo(newTodo);
        reset();

    }

    return (
        <form onSubmit={handleSubmit}>

            <h3>Agregar TODO</h3>
            <div className="input-group mt-3">

                <input type="text" className="form-control"
                placeholder="Aprender ....."
                onChange={handleInputChange}
                value={description}
                name="description"
                autoComplete="off" />

            </div>

            <button className="btn btn-outline-primary mt-3 float-right"
                type="submit"
            >
                    Agregar
            </button>

        </form>
    )
}

export default TodoAdd
