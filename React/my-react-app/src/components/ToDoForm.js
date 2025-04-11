import React, { Component } from 'react';

class ToDoForm extends Component {
  render() {
    const { title, description, handleChange, handleClickAdd } = this.props;
    return (
      <form className="mb-3">
        <div className="form-group">
          <input 
            type="text" 
            name="title" 
            className="form-control" 
            placeholder="Task Title" 
            value={title} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <input 
            type="text" 
            name="description" 
            className="form-control" 
            placeholder="Description" 
            value={description} 
            onChange={handleChange} 
          />
        </div>
        {/* Alternatively, you could use a <textarea> for description if needed */}
        <button 
          type="button" 
          className="btn btn-primary mt-2" 
          onClick={handleClickAdd}
        >
          Add Task
        </button>
      </form>
    );
  }
}

export default ToDoForm;
