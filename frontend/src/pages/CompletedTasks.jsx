import React from 'react';
import Cards from "../components/Home/Cards";

const CompletedTasks = () => {
  return (
    <div>
      <Cards home={false} status="Complete" />
    </div>
  );
};

export default CompletedTasks;