import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    React.useEffect(() => {
      try {
        setTimeout(() => {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
        }, 1000);
      } catch (error) {
        setError(error);
      }
    }, []);
  
    const saveItem = (newItem) => {
      try {
        {
          /*En set item itemName antes TODOS_V1 es el nombre que nosotros
          le definimos a ese local storage para luego llamarlo
          si lo ecesitamos* */
        }
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
  
    return { item, saveItem, loading, error};
  }

  export {useLocalStorage};