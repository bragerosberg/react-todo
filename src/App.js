import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskInput: '',
    };
  }

  appendTask = task => {
    this.setState({ tasks: [task, ...this.state.tasks] });
  };

  deleteTask = (e) => {
    let { tasks } = this.state;
    tasks = tasks.filter(todo => todo.id !== e.target.id);
    this.setState({ tasks });
  };

  toggleTask = (e) => {
    let { tasks } = this.state;
    tasks.map(task => task.id = e.target.id ? task.solved = !task.solved : task)
    this.setState({ tasks });
  };

  setTaskInput = (e) => {
    this.setState({ taskInput: e.target.value });
  };

  clearInputField = () => {
    this.setState({ taskInput: '' });
  };


  render() {
    return (
      <main className="todo__app">
        <TodoList tasks={this.state.tasks}
        taskInput={this.state.taskInput}
        solved={this.state.solved}
        deleteTask={this.deleteTask}
        appendTask={this.appendTask}
        setTaskInput={this.setTaskInput}
        toggleTask={this.toggleTask}
        clearInputField={this.clearInputField}
        />
      </main>
    );
  }
}

export default App;
