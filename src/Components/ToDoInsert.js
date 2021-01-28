import React, { useCallback, useState } from 'react';
import './ToDoInsert.scss';
import { MdAdd } from 'react-icons/md';
const ToDoInsert = () => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return (
    <form className="ToDoInsert">
      <input
        placeholder="해야 할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default ToDoInsert;
