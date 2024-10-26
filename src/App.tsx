import React, { useState } from 'react'; //importerar react och useState-hooken för att hantera lokala komponenter
import TodoList from './components/Lista'; //importera list-komponenten
import TodoInput from './components/Input'; //importerar input-komponenten för att samla nya objekt från användaren

const App: React.FC = () => { //definerar funktionell komponent (app)
  const [todos, setTodos] = useState<string[]>([ //useState för att definera och hantera lokalt tillstånd i appen(todo).
    //variabeln todos lagrar listan
    'Klappa katt',
    'Boka tvätt',
    'Köpa mjölk',
    'Plocka kottar',
  ]); // Lista med fyra strängar som redan är inlagda

  const addTodo = (todo: string) => { //funktion som uppdaterar "todo"-tillståndet/listan
    setTodos([...todos, todo]); //setTodos för att uppdatera tillståndet med nya objekt och '...'(spread operator) för att lägga till dom i slutet av befintliga listan
  };
  

  return (
    <div>
      <h1>Min att göra lista!</h1> {/*Min header*/} 
      <TodoInput addTodo={addTodo} /> {/*renderar todoinput och skickar med addtodo som prop, så att todoinput kan anropa addtodo och lägga till nya objekt*/} 
      <TodoList todos={todos} /> {/*renderar list-komponenten och skickar med aktuella listan som prop*/} 
    </div>
    
  );
};

export default App; //exporterar appen

//note to self: props används för att skicka data från förälder- till barnkomponenter. Interface skapas för att definera props (används för att använda props)