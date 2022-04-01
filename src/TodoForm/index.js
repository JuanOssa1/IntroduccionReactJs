import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
/**Textarea es un input grande */
function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea
                value = {newTodoValue}
                onChange={onChange}
                placeholder='Cortar la cebolla para el almuerzo'
            />
            <div>
                <button type='button' onClick={onCancel}> Cancelar </button>
                {/**No hago el onClick porque es un submit y lo que hace submit es el form */}
                <button type='submit'> Añadir </button>
            </div>
        </form>
    );
}


export {TodoForm};