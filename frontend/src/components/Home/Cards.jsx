import React, { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";

const Cards = ({ home, setInputDiv }) => {
  const [tasks, setTasks] = useState([
    {
      title: "Project due",
      desc: "Me and my team need to create a good task management web application",
      duedate: "May 5th",
      status: "Inprogress"
    },
    {
      title: "Simple UI",
      desc: "I need to make the simple UI for the project",
      duedate: "April 15",
      status: "Complete"
    },
    {
      title: "API",
      desc: "Need to make a simple API backend to connect frontend and backend",
      duedate: "April 25th",
      status: "Incomplete"
    }
  ]);

  const cycleStatus = (index) => {
    const statusOrder = ["Inprogress", "Complete", "Incomplete"];
    setTasks(prev => {
      const updated = [...prev];
      const currentStatus = updated[index].status;
      const nextIndex = (statusOrder.indexOf(currentStatus) + 1) % statusOrder.length;
      updated[index].status = statusOrder[nextIndex];
      return updated;
    });
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {tasks.map((items, i) => (
        <div key={i} className="flex flex-col justify-between bg-gray-700 rounded-sm p-4">
          <div>
            <h3 className='text-xl font-semibold'>{items.title}</h3>
            <h4 className='text-lg text-purple-300'>{items.duedate}</h4>
            <p className='text-gray-300 my-2'>{items.desc}</p>
          </div>
          <div className='mt-4 w-full flex items-center justify-between'>
            <button
              onClick={() => cycleStatus(i)}
              className={`p-2 rounded text-white ${
                items.status === "Complete" ? "bg-green-500" :
                items.status === "Inprogress" ? "bg-yellow-500" :
                "bg-red-500"
              }`}
            >
              {items.status}
            </button>
            <div className='text-white text-2xl font-semibold flex gap-3'>
              <button><FaRegEdit /></button>
              <button><MdDelete /></button>
            </div>
          </div>
        </div>
      ))}
      {home && (
        <button
          className='flex flex-col justify-center items-center bg-gray-700 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300'
          onClick={() => setInputDiv("fixed")}
        >
          <CiCirclePlus className='text-5xl' />
          <h2 className='text-2xl mt-4'>Add Task</h2>
        </button>
      )}
    </div>
  );
};

export default Cards;
