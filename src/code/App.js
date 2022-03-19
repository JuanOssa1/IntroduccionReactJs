import React from 'react';
import { TodoCounter } from "../code/TodoCounter.js";
import { TodoSearch } from "../code/TodoSearch.js";
import { TodoList } from "../code/TodoList.js";
import { TodoItem } from "../code/TodoItem";
import CreateTodoButtom from "../code/CreateTodoButtom";
//import './App.css';

/**Un componente inicia con la letra mayuscula */
//const url = "https://imagenes/chistosas.jpg"
/**Aqui lo que esta haciendo es combinar 
        javascript con html porque como podemos ver ahi estamos
        mandando el nombre */

/**Ahora la class del div se llamaran class name */
/**Todo lo de abajo no son etiquetas html si no jsx
 * no confundir las cosas
 */
/**Metemos todo dentro de un div porque react solo lee un
 * compinente a es como en java que solo puede haber un return
 * pero esto no es bueno por lo que hacemos un comando
 * con react para que nos cree una etiqueta invisib;e que
 * es react.fragment que hace lo de un div pero sin afectar al css
 *
 */
const defaultodos = [
  { text: "cortar cebolla", completed: true },
  { text: "tomar cebolla", completed: false },
  { text: "bailar cebolla", completed: false },
];

function App() {
  {/**como react esta actualizando constamente pues puedo usar
esta varables que tengo metidad en el arregloe para hacer filtros*/}
  const [todos, setTodos] = React.useState(defaultodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedToDos = todos.filter(todo=>todo.completed==true).length;
  const totalTodos = todos.length;
  let filtered = todos.filter(todo=>todo.text.includes(searchValue.toLowerCase()));
  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedToDos}
      
      
      />
      <TodoSearch  searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {/**con key le encio el indentidicador unico de cada componente
         * esto s para que lo use react no mas
         */}
        {filtered.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButtom />
    </React.Fragment>
  );
}

export default App;
