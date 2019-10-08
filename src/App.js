import React, { useReducer } from 'react'
import Filter from './components/Filter'
import TodoList from './components/Todos'
import AddTodo from './components/AddTodo';
import Values from './Data/Values'
import filterReducer from './Reducer/filterReducer'
import todoReducer from './Reducer/todoReducer'
import TodoContext from './context/todoContext';


const App = () => {
    const [filter,dispatchFilter] = useReducer(filterReducer,'ALL');
    const [todos,dispatchTodos] = useReducer(todoReducer,Values);
    const filterTodos = todos.filter(act => {
        if(filter === "ALL")
            return true;

        if(act.complete && filter === "COMPLETE")
            return true;
        
        if(act.complete===false && filter === "INCOMPLETE")
            return true;

        return false;
    });
    
    return (
        <div>
            <TodoContext.Provider value={dispatchTodos}>
                <Filter dispatch={dispatchFilter} />
                <TodoList todos={filterTodos} />
                <AddTodo />
            </TodoContext.Provider>
        </div>
    )

}

export default App;