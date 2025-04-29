import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import InputData from "./inputData";

const Cards = ({ home, setInputDiv, status, InputDiv }) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [editTask, setEditTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('token');
      const url = status
        ? `http://localhost:5000/api/tasks/status/${status}`
        : 'http://localhost:5000/api/tasks';
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data);
    } catch (err) {
      setError('Failed to fetch tasks');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [status]);

  const cycleStatus = async (id, currentStatus) => {
    const statusOrder = ["Inprogress", "Complete", "Incomplete"];
    const nextIndex = (statusOrder.indexOf(currentStatus) + 1) % statusOrder.length;
    const newStatus = statusOrder[nextIndex];
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `http://localhost:5000/api/tasks/${id}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTasks(tasks.map(task => task._id === id ? response.data : task));
    } catch (err) {
      setError('Failed to update status');
    }
  };

  const deleteTask = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) {
      setError('Failed to delete task');
    }
  };

  const handleEdit = (task) => {
    setEditTask(task);
    setInputDiv("fixed");
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {error && <p className="text-red-500">{error}</p>}
      {tasks.map((task) => (
        <div key={task._id} className="flex flex-col justify-between bg-gray-700 rounded-sm p-4">
          <div>
            <h3 className='text-xl font-semibold'>{task.title}</h3>
            <h4 className='text-lg text-purple-300'>{task.duedate}</h4>
            <p className='text-gray-300 my-2'>{task.desc}</p>
          </div>
          <div className='mt-4 w-full flex items-center justify-between'>
            <button
              onClick={() => cycleStatus(task._id, task.status)}
              className={`p-2 rounded text-white ${
                task.status === "Complete" ? "bg-green-500" :
                task.status === "Inprogress" ? "bg-yellow-500" :
                "bg-red-500"
              }`}
            >
              {task.status}
            </button>
            <div className='text-white text-2xl font-semibold flex gap-3'>
              <button onClick={() => handleEdit(task)}><FaRegEdit /></button>
              <button onClick={() => deleteTask(task._id)}><MdDelete /></button>
            </div>
          </div>
        </div>
      ))}
      {home && (
        <button
          className='flex flex-col justify-center items-center bg-gray-700 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300'
          onClick={() => {
            setEditTask(null);
            setInputDiv("fixed");
          }}
        >
          <CiCirclePlus className='text-5xl' />
          <h2 className='text-2xl mt-4'>Add Task</h2>
        </button>
      )}
      {InputDiv === "fixed" && (
        <InputData
          InputDiv={InputDiv}
          onClose={() => {
            setInputDiv("hidden");
            setEditTask(null);
          }}
          task={editTask}
          setTasks={setTasks}
        />
      )}
    </div>
  );
};

export default Cards;