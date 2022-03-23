import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import CreateTodoButtom from "../CreateTodoButtom/CreateTodoButtom";
{
  /**deben ser los mismos nombre a los que uno iguala en app.js */
}
function AppUI({}) {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {/**Por orden ahora usamos una nueva convencio  que no es
         * sampar el html ahi, como soliamos hacer
         * Ese value es el que se guardo en el provider en la etiqueta
         * pero en vez de value pondremos cada una de las propiedades
         * que usaremos
         */}
        {({ error, loading, searchedTodos, completeTodo, removeTodo }) => (
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
        )}
      </TodoContext.Consumer>
      <CreateTodoButtom />
    </React.Fragment>
  );
}

export { AppUI };
