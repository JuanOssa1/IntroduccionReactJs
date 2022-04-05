import React from "react";
import "./TodoItem.css";
import { IoIosCheckboxOutline } from "react-icons/io";
import { IoIosClose } from "react-icons/io";  
import {CheckBox} from "../Components/code/icons"
{
  /**Aquin estoy recibiendo un ELEMENTO de la lista como tal
no toda la lista, estoy obteniendo cada uno de los hijos de la lista
por tanto aqui si puedo sacarle el texto y todo eso */
}
function TodoItem(props) {
  return (
    <li className="TodoItem">
      {/**Aqui estamos usando estas comillas invertidas para combinar texto y codigo
       * de java script aqui como podemos ver estamos metiendo una condicion en la que si
       * el objeto completed es true se va a agregar la clase Icon-check--active esto lo aplicaria para las clases
       * Icon y Icon-check por eso tienen el espacio
       */}
      {/**En caso de que en la funcion onclomete enviara parametros seria
       * necesario envolverla en una arrowfunction
       */}
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <CheckBox
          type={"check"}
        />
      </span>

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <IoIosClose/>
      </span>
    </li>
  );
}

export { TodoItem };
