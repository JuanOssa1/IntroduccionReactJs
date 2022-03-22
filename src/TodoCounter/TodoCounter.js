import React from "react";
import './TodoCounterStyles.css';

{/**La nomenclatura cambia no es como en css */}
/*
const estilos={
    color:'red',
    backgroudColor: 'yellow',
};
*/

function TodoCounter({total,completed}){
    {/**Ya no mandamos un string mandamos un objeto como hemos venido
viendo en ejercicios pasados, si quiero enviar un objeto enbebid
lo tendria que meter como si fuera un objeto 
tambien lo puedo mandar como un archivo en css que es lo que vamos a hacer*/}
    return(<h2 className="TodoCounter">Has completado {completed} de {total} todos</h2>);
}

export {TodoCounter} ;/**Asi se hacen los exports forzxados
para quye se llamen comop le cponmgo aca */