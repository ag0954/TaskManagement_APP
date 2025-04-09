import React, { useState } from 'react';
import Cards from "../components/Home/Cards";
import InputData from "../components/Home/inputData";
import { CiCirclePlus } from "react-icons/ci";

const AllTasks = () => {
  const [InputDiv, setInputDiv] = useState("hidden");

  return (
    <>
      <div>
        <div className='w-full flex items-end px-4 py-2 justify-end'>
          <button onClick={() => setInputDiv("fixed")}>
            <CiCirclePlus className='text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300' />
          </button>
        </div>
        <Cards home={true} setInputDiv={setInputDiv} />
      </div>
      <InputData InputDiv={InputDiv} onClose={() => setInputDiv("hidden")} />
    </>
  );
};

export default AllTasks;
