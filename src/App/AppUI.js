import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import CreateTodoButtom from "../CreateTodoButtom/CreateTodoButtom";
import { Modal } from "../Modal/index";
  /**deben ser los mismos nombre a los que uno iguala en app.js */
function AppUI() {
  /**Asi llamo todas las propiedades como tal podria guardar esto
   * como value y despues hacer value.error y esas cosas pero
   * es mas facil de esta manera, mas intuitivo
   */
  const { error, loading, searchedTodos, completeTodo, removeTodo,openModal,setOpenModal} = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      {/**Por orden ahora usamos una nueva convencio  que no es
       * sampar el html ahi, como soliamos hacer
       * Ese value es el que se guardo en el provider en la etiqueta
       * pero en vez de value pondremos cada una de las propiedades
       * que usaremos
       */}
      <TodoList>
        {/**con key le envio el indentidicador unico de cada componente
         * esto s para que lo use react no mas
         */}
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => removeTodo(todo.text)}
          />
        ))}
      </TodoList>
      <Modal>
        {/**El ? lo que hace e solo llamar la propiedad text
         * cuando ya haya cargado el arreglo
         */}
        <p>{searchedTodos[0]?.text}</p>
      </Modal>
      <CreateTodoButtom/>
    </React.Fragment>
  );
}

export { AppUI };
