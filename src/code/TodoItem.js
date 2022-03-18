import React from 'react';
import '../Styles/TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
            {/**Aqui estamos usando estas comillas invertidas para combinar texto y codigo 
       * de java script aqui como podemos ver estamos metiendo una condicion en la que si 
       * el objeto completed es true se va a agregar la clase Icon-check--active esto lo aplicaria para las clases 
       * Icon y Icon-check por eso tienen el espacio
       */}
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
        √
      </span>

      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export { TodoItem };