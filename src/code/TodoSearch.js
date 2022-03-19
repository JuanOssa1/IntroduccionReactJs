import React from 'react';
import '../Styles/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
    {/**Esto es como si fuera un observer mira constantemente
que es lo que ha cambiado y lo va actualizando retorna 
un objeto y a ese ojet de las tantas propiedades que tiene
puedo sacarle lo que la persona va escribiendo
y ese useState es un react Hook*/}
{/**el primer parametro del arreglo defiene el nombre del estado
actual y el segundo define el nombre de la funcion para
actualizar el estado */}
  const onSearchValueChange = (event) =>{
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input 
      className="TodoSearch" 
      placeholder="Escribe algo"
      onChange={onSearchValueChange}
      value={searchValue}
    />
  );
}

export { TodoSearch };