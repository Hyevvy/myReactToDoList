import React, { useState } from 'react';
import ToDoTemplate from './Components/ToDoTemplate';
import ToDoInsert from './Components/ToDoInsert';
import ToDoList from './Components/ToDoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '깜이 산책하기', checked: true },
    { id: 2, text: '리액트 공부하기', checked: true },
    { id: 3, text: '자료구조 공부하기', checked: false },
  ]);
  return (
    <ToDoTemplate>
      <ToDoInsert />
      <ToDoList todos={todos} />
    </ToDoTemplate>
  );
};
export default App;
