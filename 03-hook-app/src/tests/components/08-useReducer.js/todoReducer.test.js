import React from 'react';
import { todoReduce } from '../../../components/08-useReducer/todoReduce';
import { demoTodos } from "../fixtures/demoTodos";

describe('Pruebas en todoReducer',()=>{

    test('debe de retomar el estado por defecto',()=>{

        const state= todoReduce(demoTodos,{});

        expect(state).toEqual(demoTodos);
    });
    test('debe de agregar un TODO',()=>{
        const newTodo ={
            id:3,
            desc:'Aprender Express',
            done:false 
        };
        const action ={
            type:'add',
            payload:newTodo
        };
        const state= todoReduce(demoTodos,action);
        // expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos,newTodo])
    });

    test('debe de borrar un Todo',()=>{

        const action={
            type:'delete',
            payload: 1
        }

        const state=todoReduce(demoTodos,action);
        expect(state.length).toBe(1);
        expect(state).toEqual([ demoTodos[1] ]);

    })
    test('debe de hacer el TOGGLE del TODO', ()=>{

        const action={
            type:'toggle',
            payload:1
        };
        const state=todoReduce(demoTodos,action);
        console.log(state);
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1])

    })

})
