
import React from 'react'; //importerar react-biblioteket

const TodoButton: React.FC = () => { //definerar funktionell komponent i react (knappen)
  return (
    <button type="submit">Lägg till</button> //själva knappen. submit för att den är avsedd att användas för att skicka data(lägga till objekt)
  );
};

export default TodoButton; //exporterar knappen för att använda den i andra delar av appen