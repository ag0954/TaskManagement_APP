import React from 'react'
import { FaTasks } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { FaFlagCheckered } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const data = [
        {
            title: "All task",
            icon: <FaTasks />,
            link:"/",
        },
        {
            title: "Task Inprogress",
            icon:<FaBarsProgress />,
            link: "/ProgressTasks",
        },
        {
            title: "Completed Tasks",
            icon:<FaFlagCheckered />,
            link: "/CompletedTasks",
        },
        {
            title: "Incomplete Tasks",
            icon:<TbNotebookOff />,
            link: "/IncompleteTasks"
        },
    ];
  return (
    <>
        <div>
            <h2 className = "text-xl font-sem">Task Management</h2>
            <h4 className="mb-1 text-gray-400">Webapi 2025</h4>
            <hr />
        </div>
        <div>
          {data.map((items,i)=>(
            <Link 
              to={items.link}
              key= {i}
              className="my-2 flex items-center gap-x-2 hover:bg-gray-500 p-2 rounded transition-all duration-300"
              >
              {items.icon}{items.title}
            </Link>
          ))}  
        </div>
        <div><button className='bg-gray-600 w-full p-2 rounded'>Log Out</button></div>
        </>
  )
}

export default Sidebar