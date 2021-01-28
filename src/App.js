import React from 'react';
import ToDoTemplate from './Components/ToDoTemplate';
import ToDoInsert from './Components/ToDoInsert';
import ToDoList from './Components/ToDoList';
const App = () => {
  return (
    <ToDoTemplate>
      <ToDoInsert />
      <ToDoList></ToDoList>
    </ToDoTemplate>
  );
};
export default App;
