import React from 'react';
import Cards from "../components/Home/Cards";

const IncompleteTasks = () => {
  return (
    <div>
      <Cards home={false} status="Incomplete" />
    </div>
  );
};

export default IncompleteTasks;