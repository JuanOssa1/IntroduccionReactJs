import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import CreateTodoButtom from "../CreateTodoButtom/CreateTodoButtom";
{/**deben ser los mismos nombre a los que uno iguala en app.js */}
function AppUI({
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      filteredTodos,
      completeTodo,
      removeTodo,
}) {
  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {/**con key le envio el indentidicador unico de cada componente
         * esto s para que lo use react no mas
         */}
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !filteredTodos.length) && <p>¡Crea tu primer TODO!</p>}
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => removeTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButtom />
    </React.Fragment>
  );
}

export { AppUI };
