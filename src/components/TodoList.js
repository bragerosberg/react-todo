import React from 'react';
import TodoCard from './TodoCard';
import { uuid } from 'uuidv4';


const TodoList = (props) => {
  const handleChange = (event) => {
    props.setTaskInput(event);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.appendTask({
      taskInput: props.taskInput,
      id: uuid(),
    });
    props.clearInputField();
  };

  return (
    <article>
      <form className="todo__form" onSubmit={handleSubmit}>
        <input className="todo__form__input" type="text" value={props.taskInput} placeholder="Please write your task" onChange={handleChange} />
        <button className="todo__form__button" onClick={handleSubmit}>Add Task</button>
      </form>

      <section className="todo__list">
        <h1 className="todo__list__header">ToDo List</h1>
        <div className="todo__list__cards">
          {props.tasks.map(task => (
              <TodoCard key={task.id} task={task} toggleTask={props.toggleTask} deleteTask={props.deleteTask}/>
          ))}
        </div>
      </section>
    </article>
  );
}

export default TodoList;
