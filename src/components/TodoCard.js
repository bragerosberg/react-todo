import React from 'react';

class TodoCard extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      solved: false,
    };
  }

  toggleTask = () => {
    this.setState({
      solved: !this.state.solved,
    });
  }

  render() {
    return (
      this.state.solved ? (
        <li className="todo__card__done" id={this.props.task.id}
          onClick={this.toggleTask.bind(this)}>
            {this.props.task.taskInput}
          <button className="todo__card__done--button"
          id={this.props.task.id}
          onClick={this.props.deleteTask}>X</button>
        </li>
      ) : (
        <li className="todo__card__task" id={this.props.task.id}
        onClick={this.toggleTask.bind(this)}>
          {this.props.task.taskInput}
        </li>
      )
    );
  }
}

export default TodoCard;
