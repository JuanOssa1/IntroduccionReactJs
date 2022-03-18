import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import App from "./code/App.js";
//import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  /**Asi escribiuremos el resto de los
   * componentes
   */
  /**Aqui esta renderizando a partir de un Js externo */
  /**Lo que se renderiza son los componentes */
  /**Los componentes son invisibles para html pero si para react*/
  /**Cuando al componente le mando ese paraMETRo luego lo puedo
   * usar
   * en los demas Javascript 
   */
    //<App saludo="buenas noches"/>,
  /**Si abrimos y cerramos la etiqueta de componentes podemos crear contenido dentro 
   * lo que permite que quien lo use usando el comando app.children
   * obtenga el contenido que se encuentra dentro
   * 
  */
    <App/>,

    document.getElementById("root")
);
/*
ReactDOM.render(
  /**Asi escribiuremos el resto de los
   * componentes
   */

/**Asi es mas intuitivo */
/*
  function App(){
    return (
      <h1>
        ola fans
      </h1>
    );
  }
  /**Formas de crear componentes */
//class Componente extends React.Component
/*
  Con el entorno esto no toca hacerlo, el entorno nos ahorra esto por lo que lo hacemos de la siguiente manera
  function App(){
    return (
      React.createElement('h1', {id:'title'}, "ola fans")
    );
  }
  
);
*/
