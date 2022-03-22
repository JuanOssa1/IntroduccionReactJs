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
/**Haciendo nuestro propio react Hook */
function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  React.useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setError(error);
    }
  }, []);

  const saveItem = (newItem) => {
    try {
      {
        /*En set item itemName antes TODOS_V1 es el nombre que nosotros
        le definimos a ese local storage para luego llamarlo
        si lo ecesitamos* */
      }
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading, error};
}

function App() {
  {
    /**como react esta actualizando constamente pues puedo usar
esta varables que tengo metidas en el arreglo para hacer filtros*/
  }
  /*Aqui estamos llamando a nuestro custom Hook */
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed == true).length;
  const totalTodos = todos.length;
  let filtered = todos.filter((todo) =>
    todo.text.includes(searchValue.toLowerCase())
  );
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
  /**Ejecuta el codigo justo despues de que react tiene todo
   * listo para renderizar
   */
  console.log("Render (antes del use effect)");

  /**Aqui lo que hace s ejecutarse cada que haya un cambio en lo que metimos
   * en el arreglo, es decir qie cada que haya un cambio en el total de todos
   * va a ejecutar ese useEffect
   */
  React.useEffect(() => {
    console.log("use effect");
  }, [totalTodos]);
  console.log("Render (luego del use effect)");

  {
    /**Por division de responsabilidades se manda toda la interfaz a otra clase*/
  }
  return (
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filteredTodos={filtered}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
    />
  );
}

export default App;
