import React from 'react';
import cn from 'classnames';
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
} from 'react-icons/md';
import './ToDoListItem.scss';
const ToDoListItem = ({ todo }) => {
  const { text, checked } = todo;
  return (
    <div className="ToDoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default ToDoListItem;
