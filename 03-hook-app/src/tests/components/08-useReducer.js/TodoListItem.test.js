import { shallow } from "enzyme"
import TodoListItem from "../../../components/08-useReducer/TodoListItem"
import { demoTodos } from "../fixtures/demoTodos";


describe('Pruebas en <TodoListItem />',()=>{

    const handDelete =jest.fn();
    const handleToggle =jest.fn();

    const wrapper=shallow(<TodoListItem 
        todo ={demoTodos[0]}
        index={0}
        handDelete={handDelete}
        handleToggle={handleToggle}
         />);

    test('debe de mostrarse correctamente',()=>{

        expect(wrapper).toMatchSnapshot();
    });
    test('debe de llamar la función  handDelete',()=>{
        wrapper.find('button').simulate('click');
        expect(handDelete).toHaveBeenCalledWith(demoTodos[0].id);
    });
    test('debe de llamar la funcion handleToggle',()=>{
        const p= wrapper.find('p').simulate('click');
        expect(p.text()).toBe(`1 - ${demoTodos[0].desc}`);
    });
    test('debe de tener la clase complete en el TODO.done=true',()=>{

        const todo=demoTodos[0];
        todo.done=true;

        const wrapper = shallow(
        <TodoListItem 
            todo ={todo}
             />
        );
        expect(wrapper.find('p').hasClass('complete')).toBe(true);

    })

})