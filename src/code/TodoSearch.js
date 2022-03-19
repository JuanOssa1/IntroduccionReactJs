import React from 'react';
import '../Styles/TodoSearch.css';

function TodoSearch() {
  {/**Esto es como si fuera un observer mira constantemente
que es lo que ha cambiado y lo va actualizando retorna 
un objeto y a ese ojet de las tantas propiedades que tiene
puedo sacarle lo que la persona va escribiendo*/}
  const onSearchValueChange = (event) =>{
    console.log(event.target.value);
  };
  return (
    <input 
      className="TodoSearch" 
      placeholder="Escribe algo"
      onChange={onSearchValueChange}
    
    />
  );
}

export { TodoSearch };