import { shallow } from 'enzyme';
import React from 'react';
import RealExample from '../../../components/04-useRef/RealExample';

describe('Prueba en <RealExampleRef />',()=>{

    const wrapper =shallow(<RealExample />);

    test('debe mostrarse correctamente',()=>{

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

    });

    test('debe de mostrar el componente <MultipleCustomHooks />',()=>{

        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

    })

})