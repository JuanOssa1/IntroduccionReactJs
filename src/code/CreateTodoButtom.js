import React from "react";
import "../Styles/CreateTodoButton.css";

function CreateTodoButton(props) {
  const onclickButton = (msg) => {
    alert(msg);
  };
  return (
    <button
      className="CreateTodoButton"
      onClick={() => onclickButton("Holaaaaa")}
    >
      +
      {/**Todo lo que inicie en "on" son eventos que pueden suceder
       * como onclick o onmouse etc y asi reaccionamos a esos eventos
       * Y TENGO que meterle una funcion porque si no cuando se ejecuta
       * hace lo que escribi de una porque solo queremos que se ejecute cuando haya un clic
       * no apenas inicie
       * Tambien puedo definir las funciones arriba del return para
       * luego llamarlas y que asi sea mas ordenado
       */}
    </button>
  );
}

export default CreateTodoButton;
