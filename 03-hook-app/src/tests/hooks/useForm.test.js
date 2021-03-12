import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm',()=>{

    const initialForm ={
        name:'fernando',
        email:'fernando@gmail.com'
    };
    test('debe de regresar un formulario por defecto',()=>{

        const { result }=renderHook(()=>useForm(initialForm));
        const [value, handleImputChange, reset ]=result.current;

        expect(value).toEqual(initialForm);
        expect(typeof handleImputChange).toBe('function');
        expect( typeof reset).toBe('function');
    });
    test('debe de cambiar el valor del formulario (cambiar name)',()=>{

        const { result }=renderHook(()=>useForm(initialForm));
        const [, handleImputChange ]=result.current;

        act(()=>{
            handleImputChange({
                target:{
                    name:'name',
                    value:'Melisa'
                }
            })
        });
        const [valueFrom]=result.current;
        expect(valueFrom).toEqual({...initialForm,name:'Melisa'});

    });
    test('debe de re-establecer el formulario con RESET',()=>{

        const { result }=renderHook(()=>useForm(initialForm));
        const [, handleImputChange,reset ]=result.current;

        act(()=>{

            handleImputChange({
                target:{
                    name:'name',
                    value:'Melisa'
                }
            });
            reset();
            const [valueFrom]=result.current;
            console.log(valueFrom);
           expect(valueFrom).toEqual({...initialForm});
        });

    })

})