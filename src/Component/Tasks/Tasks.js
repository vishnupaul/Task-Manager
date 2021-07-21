import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai';

const Tasks = (submitTask) => {
  const [tasks, setTasks] = useState([]);

  const deleteTask = async (_id) => {
    console.log(_id);
    const res = await axios.delete(
      'https://paul-todosapp.herokuapp.com/tasks/' + _id
    );
    fatchTask();
  };
  const fatchTask = async () => {
    const responce = await axios.get(
      'https://paul-todosapp.herokuapp.com/tasks'
    );
    setTasks(responce.data);
  };
  useEffect(() => {
    fatchTask();
  }, [submitTask]);

  return (
    <div>
      <ul>
        {tasks.map((task) => {
          const { _id, desc, date, category } = task;
          return (
            <div>
              <li className='tasks'>
                <div className='task-left-side'>
                  <span className='delete '>
                    <AiFillDelete onClick={() => deleteTask(_id)} />
                  </span>
                  <div className='details'>
                    <p className='task'>{desc}</p>
                    <p className='date'>{date}</p>
                  </div>
                </div>
                <button className=' category-btn'>{category}</button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Tasks;
