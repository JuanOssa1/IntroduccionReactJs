import React from "react";
import { AppUI, AppUi } from "./AppUI";
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
/*
const defaultodos = [
  { text: "cortar cebolla", completed: false },
  { text: "tomar cebolla", completed: false },
  { text: "bailar cebolla", completed: false },
];
*/


function App() {
  {
    /**como react esta actualizando constamente pues puedo usar
esta varables que tengo metidad en el arregloe para hacer filtros*/
  }
  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1',[JSON.stringify([])]);
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }


  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => todo.completed == true).length;
  const totalTodos = todos.length;
  let filtered = todos.filter((todo) =>
    todo.text.includes(searchValue.toLowerCase())
  );
  const saveTodos = (newTodos) =>{
    {/*En set item TODOS_V1 es el nombre que nosotros
  le definimos a ese local storage para luego llamarlo
si lo ecesitamos* */}
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1',stringifiedTodos)
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    {
      /**Inyecta los todos previos en un nuevo arreglo */
    }
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const removeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    {
      /**Inyecta los todos previos en un nuevo arreglo */
    }
    const newTodos = [...todos];
    let updated = newTodos.filter((newTodos) => !newTodos.text.includes(text));
    //newTodos.splice()
    saveTodos(updated);
  };
  {
    /**Por division de responsabilidades se manda toda la interfaz a otra clase*/
  }
  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filteredTodos={filtered}
      completeTodo = {completeTodo}
      removeTodo = {removeTodo}
    />
  );
}

export default App;
