import React from 'react'
import { Outlet } from 'react-router-dom';
import { IoClose } from "react-icons/io5";

const InputData = ({ InputDiv = '', onClose }) => {
    return (
      <>
        <div className={`${InputDiv} fixed top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`} onClick={onClose}></div>
        <div className={`${InputDiv} fixed top-0 left-0 flex items-center justify-center h-screen w-full`}>
          <div className="w-2/6 bg-gray-900 p-4 rounded z-50">
            <div className='flex justify-end'>
              <button className='text-2xl text-white' onClick={onClose}><IoClose /></button>
            </div>
            <input 
              type="text" 
              placeholder='Title' 
              name="title" 
              className='px-3 py-2 rounded w-full bg-gray-700 my-3 text-white'
            />
            <textarea
              name="desc"
              cols="30"
              rows="10"
              placeholder="Description..."
              className="px-3 py-2 rounded w-full bg-gray-700 my-3 text-white"
            ></textarea>
            <button className='px-3 py-2 bg-blue-400 rounded text-white text-xl font-semibold'>Submit</button>
          </div>
        </div>
      </>
    );
  };
  
  export default InputData;
  