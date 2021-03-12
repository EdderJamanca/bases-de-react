import { useCounter } from "../../hooks/useCounter"
import { renderHook, act  } from '@testing-library/react-hooks'


describe('Pruebas en useCounter', ()=>{

    test('dede de retomar valores poi defecto',()=>{

        const { result }= renderHook(()=>useCounter() );
        
        const [state, incremento,reset, decremento]= result.current;
        
        expect(state).toBe(10);
        expect(typeof incremento).toBe('function');
        expect(typeof reset).toBe('function');
        expect(typeof decremento).toBe('function');

    });

    test('debe de tener el couter en 100',()=>{

        const { result }= renderHook(()=>useCounter(100));

        const [ state ]=result.current;

        expect(state).toBe(100);

    });

    test('debe de incrementar el counter en 1', ()=>{

        const { result }=renderHook( ()=>useCounter(100));
        const  [,incremento]  = result.current;

        act( ()=>{
            incremento();
        });
        const  [state]  = result.current;
        expect( state ).toBe(101);

    });
    test('debe de retornar el el valor enviado ',()=>{
        const { result }=renderHook( ()=>useCounter(100));
        const  [,incremento,reset]  = result.current;
        act( ()=>{
            incremento();
            reset();
        });
        const  [state]  = result.current;
        expect( state ).toBe(100);

    })
    test('debe de decrementar el state en 1',()=>{
        const { result }=renderHook( ()=>useCounter(100));
        const  [,,,decremento]  = result.current;
        act( ()=>{
            decremento();
        });
        const  [state]  = result.current;
        expect( state ).toBe(99);
    })

})