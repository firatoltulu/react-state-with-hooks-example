import React,{useContext} from 'react'
import TodoContext from '../context/todoContext'



const TodoList = ({todos}) => 
{
       return(
            <ul>
                {
                todos.map(act=>(
                    <TodoItem key={act.id} todo={act} />
                ))
                }
            </ul>
        )
}

const TodoItem = ({ todo }) =>{
    const dispatch = useContext(TodoContext);

    const handleChange = () =>{
        dispatch({
             type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
             id: todo.id
        });
    }

    return (
        <li>
        <label>
            <input
                type="checkbox"
                checked={todo.complete}
                onChange={handleChange}
            />
            {todo.task}
        </label>
        </li>
    );

}
export default TodoList

