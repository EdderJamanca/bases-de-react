import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme"
import TodoApp from "../../../components/08-useReducer/TodoApp"
import { demoTodos } from "../fixtures/demoTodos";


describe('Pruebas en <TodoApp />',()=>{

    const wrapper =shallow(<TodoApp />);
    Storage.prototype.setItem=jest.fn(()=>{});

    test('debe de mostrarse correctamente', ()=>{

        expect(wrapper).toMatchSnapshot();
    });



})