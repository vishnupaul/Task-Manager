import React, { useState } from 'react';

import axios from 'axios';
import Tasks from '../Tasks/Tasks';

const Inputs = () => {
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const submitTask = async (e) => {
    e.preventDefault();
    try {
      const newTask = {
        desc,
        date,
        category,
      };
      const res = await axios.post(
        'https://paul-todosapp.herokuapp.com/tasks',
        newTask
      );
      setDesc('');
      setDate('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className='inputs'>
        <form method='POST' className='contact-form'>
          <div className='section-title contact-head'>
            <h2>
              Todo<span>App</span>
            </h2>
          </div>
          {/* form control */}
          <div className='form-control'>
            <label htmlFor='description'>Description</label>
            <input
              type='text'
              placeholder='What do you need to do ?'
              name='desc'
              className='form-input'
              id='description'
              required
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </div>
          <div className='sub-inputs'>
            <div className='form-control mid'>
              <label htmlFor='category'>Category</label>
              <select
                id='category'
                name='category'
                className='form-input category'
                required
                onChange={(e) => {
                  const selectCategory = e.target.value;
                  setCategory(selectCategory);
                }}
              >
                <option value=''>Choose a category</option>
                <option value='Personal'>Personal</option>
                <option value='Work'>Work</option>
                <option value='School'>School</option>
                <option value='Office'>Office</option>
                <option value='Other'>Other</option>
              </select>
            </div>

            <div className='form-control mid'>
              <label htmlFor='due-date'>Due date</label>
              <input
                type='date'
                name='date'
                className='form-input '
                id='due-date'
                required
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
          </div>
          <div className='buttons'>
            <button type='submit' className='btn btn-add' onClick={submitTask}>
              Add task
            </button>
          </div>
        </form>
      </div>
      <Tasks submitTask={submitTask} />
    </div>
  );
};

export default Inputs;
