import React from 'react';
import '../Styles/TodoList.css'

function TodoList(props) {
  return (
    <section>
      <ul>
        {/**Aqui estoy recibiendo la lista y estoy poniendola en 
         * una lista desordenada cada uno de sus elementos
         */}
        {props.children}
        {console.log(props.children)}
      </ul>
    </section>
  );
}

export { TodoList };