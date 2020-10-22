import React from "react"

class TodoItem extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#d35e0f",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    const { completed, id, title } = this.props.todo
    return <li className="todo-item">
            <input type="checkbox" 
                   checked={completed}
                   onChange={() => this.props.handleChangeProps(id)}
		   deleteTodoProps={this.props.deleteTodoProps}
            />
            <span style={completed ? completedStyle : null}>{title} </span>
            <button  className="btn-style" onClick={() => this.props.deleteTodoProps(id)}>X</button>
           </li>
  }
}
/*
function TodoItem(props) {
  return <li>{props.todo.title}</li>
}
*/

export default TodoItem
