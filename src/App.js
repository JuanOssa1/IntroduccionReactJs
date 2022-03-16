import react from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButtom } from "./CreateTodoButtom.js";
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
const todos =[
  {text: 'cortar cebolla', completed: false},
  {text: 'tomar cebolla', completed: false},
  {text: 'bailar cebolla', completed: false}
];


function App() {
  return (
   <react.Fragment>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        {/**con key le encio el indentidicador unico de cada componente
         * esto s para que lo use react no mas
         */}
        {todos.map(todo =>(<TodoItem key={todo.text} text={todo.text} />))}
      </TodoList>
      <CreateTodoButtom />      
   </react.Fragment>
  );
}

export default App;
