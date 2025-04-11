import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Todoitem extends Component {
    getStyle = () => {
        return {TextDecoration: this.props.todo.completed ? 'line-through' : 'none',
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textAlign: 'left'
        }}
        markComplete = (e) => {
            console.log(this.props);
            // You should call a method passed from parent here, not outside
          };
        
    render( ){
        const{ id, title }=this.props.todo;
    return(<div style={ this.getStyle() }>
        <p><input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{''}
            {title}</p>
    </div >)
       
}
}

Todoitem.propTypes = {
    todo : PropTypes.object.isRequired
}
// Todos.defaultProps = {


export default Todoitem;