import { shallow } from "enzyme"
import TodoList from "../../../components/08-useReducer/TodoList"
import { demoTodos } from "../fixtures/demoTodos"

describe('Pruebas en <TodoList />',()=>{

    const handDelete=jest.fn();
    const handleToggle=jest.fn();

    const wrapper =shallow(
        <TodoList
         todos={ demoTodos}
         handDelete={handDelete}
         handleToggle={handleToggle}
          
        />
    );
    test('debe de mostrarse correctamente',()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener dos <TodoListItem />',()=>{
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handDelete')).toEqual(expect.any(Function));
    })

})