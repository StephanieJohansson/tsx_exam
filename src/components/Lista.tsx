import React from 'react'; //importerar react-biblioteket
import TodoItem from './Objekt'; //importerar Objekt-komponenten

interface TodoListProps { //gränssnitt(navigation) för props som list-komponenten kommer ta emot och säger att props kommer vara strängar
  todos: string[]; 
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => { //definerar funktionell komponent i react (listan). Tar emot todos via props
  return (
    <ul> {/*lägger till listan*/}
      {todos.map((todo, index) => ( //Lägger till map-metoden så varje objekt blir en komponent som skickas som props
       <TodoItem key={index} todo={todo} /> //använder key för att ge varje komponent en unik identifiering så appen kan fungera korrekt samt hjälpa react hålla reda på varje komponent
      ))}
    </ul>
  );
};

export default TodoList; //exporterar listan för att använda den i andra delar av appen