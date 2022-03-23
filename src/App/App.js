import React from "react";
import { AppUI } from "./AppUI";
import {TodoProvider} from "../TodoContext/TodoContext"
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
/**Haciendo nuestro propio react Hook */


function App() {
    /**como react esta actualizando constamente pues puedo usar
esta varables que tengo metidas en el arreglo para hacer filtros*/

  /*Aqui estamos llamando a nuestro custom Hook */
  
  /**Todo lo que este dentro de todoprovider recibira todos 
   * los servicios que el provider tenga 
   */
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
