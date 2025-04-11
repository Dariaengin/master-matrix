import React, { Component } from 'react';
import TodoItem from './TodoItem';

class ToDoList extends Component {
  render() {
    const { taskList, handleClickDone } = this.props;
    return (
      <ul className="list-group">
        {taskList.map(task => (
          <TodoItem 
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            handleClickDone={handleClickDone}
          />
        ))}
      </ul>
    );
  }
}

export default ToDoList;
