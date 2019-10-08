import React ,{ useState,useContext } from 'react'
import uuid from 'uuid/v4'
import TodoContext from '../context/todoContext';

const AddTodo = () =>{
    const dispatch = useContext(TodoContext);

    const [task,setTask] = useState('');

    const handleInputEventChange = event =>{
        setTask(event.target.value);
    };

    const handleSubmit = event => {
        if(task){
           dispatch({ type: 'ADD_TODO', task, id: uuid() });
        }
        setTask('');
        event.preventDefault();
     };

     return (
        <form onSubmit={handleSubmit} >
            <input type="text" onChange={(handleInputEventChange)} value={task}  />
            <button type="submit">Add Todo</button>
        </form> 
     )
}

export default AddTodo