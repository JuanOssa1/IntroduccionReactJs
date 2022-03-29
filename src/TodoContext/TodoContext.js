import React from "react";
import { useLocalStorage } from "./useLocalStorage";

/**Aqui estamos creando el contexto para no tener que hacer tanta herencia
 * y que eso nos genere todo ese desorden
 */
const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);/**Por defecto el modal no esta abierto entonces se pone en falso
  modal el de la clase modal la ventanita que tiene como otro fondo*/
  const completedTodos = todos.filter((todo) => todo.completed == true).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
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

    /**Por division de responsabilidades se manda toda la interfaz a otra clase*/
  return (
    /**Asi hago que este sea el padre y que todos sus hijos puedan usar los estados
     * pero primero debo definir que compoinentes compartir
     */
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        removeTodo,
        openModal,
        setOpenModal
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}


export { TodoContext, TodoProvider };
