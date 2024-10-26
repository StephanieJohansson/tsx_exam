import React from 'react'; //importerar react-biblioteket

interface TodoItemProps { //definerar interface(gränsnitt/navigering) för att ta emot objekt och säger att todo(objekten) kommer vara strängar
  todo: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => { //definerar funktionell komponenten TodoItem i react som tar emot props
  return <li>{todo}</li>; //renderar listan med todo-värdet

  
};

export default TodoItem; //exporterar Objekt för att använda den i andra delar av appen