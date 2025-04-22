import React from 'react';
import Cards from "../components/Home/Cards";

const ProgressTasks = () => {
  return (
    <div>
      <Cards home={false} status="Inprogress" />
    </div>
  );
};

export default ProgressTasks;