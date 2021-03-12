
import { shallow } from 'enzyme';
import React from 'react';
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHoks/>',()=>{
    
    // beforeEach( ()=>{

    // })


    test('debe de mostrarse Correctamente', ()=>{
        
        useCounter.mockReturnValue({
            state: 10, 
            incremento:()=>{}
        })

        useFetch.mockReturnValue({
            data:null,
            loading:true,
            error:null
        })

        const wrapper =shallow( <MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();

    });
    test('shauld debe de mostrar la informacion',()=>{
        useCounter.mockReturnValue({
            state: 10, 
            incremento:()=>{}
        })

        useFetch.mockReturnValue({
            data:[{
                author:'Fernando',
                quote:'Hola Mundo'
            }],
            loading:false,
            error:null
        });
        const wrapper= shallow(<MultipleCustomHooks />);
        expect( wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-3').text().trim()).toBe('Hola Mundo');
        expect( wrapper.find('.blockquote-footer').text().trim()).toBe('Fernando');

    })

})