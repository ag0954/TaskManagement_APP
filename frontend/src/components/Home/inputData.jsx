import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoClose } from "react-icons/io5";

const InputData = ({ InputDiv = '', onClose, task = null, setTasks }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [duedate, setDuedate] = useState('');
  const [status, setStatus] = useState('Incomplete');
  const [error, setError] = useState(null);

  // Prefill form if editing a task
  useEffect(() => {
    if (task) {
      setTitle(task.title || '');
      setDesc(task.desc || '');
      setDuedate(task.duedate || '');
      setStatus(task.status || 'Incomplete');
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const payload = { title, desc, duedate, status };
      let response;

      if (task) {
        // Edit existing task
        response = await axios.put(
          `http://localhost:5000/api/tasks/${task._id}`,
          payload,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        // Update task list
        setTasks(prev => prev.map(t => t._id === task._id ? response.data : t));
      } else {
        // Create new task
        response = await axios.post(
          'http://localhost:5000/api/tasks',
          payload,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        // Add new task to list
        setTasks(prev => [...prev, response.data]);
      }

      // Reset form and close
      setTitle('');
      setDesc('');
      setDuedate('');
      setStatus('Incomplete');
      setError(null);
      onClose();
    } catch (err) {
      setError(err.response?.data.message || 'Failed to save task');
    }
  };

  return (
    <>
      <div className={`${InputDiv} fixed top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`} onClick={onClose}></div>
      <div className={`${InputDiv} fixed top-0 left-0 flex items-center justify-center h-screen w-full`}>
        <div className="w-2/6 bg-gray-900 p-4 rounded z-50">
          <div className='flex justify-end'>
            <button className='text-2xl text-white' onClick={onClose}><IoClose /></button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='Title'
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='px-3 py-2 rounded w-full bg-gray-700 my-3 text-white'
            />
            <textarea
              name="desc"
              cols="30"
              rows="10"
              placeholder="Description..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="px-3 py-2 rounded w-full bg-gray-700 my-3 text-white"
            ></textarea>
            <input
              type="text"
              placeholder='Due Date (e.g., May 5th)'
              name="duedate"
              value={duedate}
              onChange={(e) => setDuedate(e.target.value)}
              className='px-3 py-2 rounded w-full bg-gray-700 my-3 text-white'
            />
            <select
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="px-3 py-2 rounded w-full bg-gray-700 my-3 text-white"
            >
              <option value="Inprogress">In Progress</option>
              <option value="Complete">Complete</option>
              <option value="Incomplete">Incomplete</option>
            </select>
            <button type="submit" className='px-3 py-2 bg-blue-400 rounded text-white text-xl font-semibold'>
              {task ? 'Update Task' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputData;