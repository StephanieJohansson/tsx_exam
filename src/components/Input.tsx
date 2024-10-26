
import React, { useState } from 'react'; //importerar react-biblioteket
import TodoButton from './Button'; // Importera Button

interface TodoInputProps { //definerar funktionen interface (navigering/gränssnitt) för props som tar emot addTodo (tar emot strängar som användaren skkriver in)
  addTodo: (todo: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => { //definirer todoInput som en funktionell komponent
  const [inputValue, setInputValue] = useState(''); //state variabel för att lagra värdet användaren skriver i textfältet. just nu tom sträng med hjälp av useState

  const handleSubmit = (e: React.FormEvent) => { //funktion för formulärhantering när användaren tycker på enter
    e.preventDefault(); //förhindrar att sidan inte laddar om vid nytt tillagt objekt
    if (inputValue.trim()) { //if-sats som gör följade steg om inte fältet är tomt V
      addTodo(inputValue); //lägger till objektet med addTodo funktionen
      setInputValue(''); //nollställer input fältet efter man lagt till ett objekt
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* Använder onSubmit för att anropa funktionen handleSubmit när användaren tycker enter*/}
      <input //input-fältet
        type="text" //säger att det är en text som inmatas
        value={inputValue} //sätter värdet i inputfältet till state-variabeln inputValue
        onChange={(e) => setInputValue(e.target.value)} //uppdaterar state-variabeln varje gång användaren matar in nåt i input fältet
        placeholder="Lägg till ett objekt..." //står i förvääg i inputfältet för att visa användaren vart hen ska skriva
      />
      <TodoButton /> {/* Använder Button-komponenten */}
    </form>
  );
};

export default TodoInput; //exporterar Input för att använda den i andra delar av appen