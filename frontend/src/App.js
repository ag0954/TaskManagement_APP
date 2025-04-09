import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AllTasks from './pages/AllTasks';
import ProgressTasks from './pages/ProgressTasks';
import CompletedTasks from './pages/CompletedTasks';
import IncompleteTasks from './pages/IncompleteTask';
import Signup from './pages/Signup';
import Login from './pages/Login';

const App = () => {
  return (
    <div className="bg-gray-800 text-white h-screen p-2">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<AllTasks />} />
            <Route path="ProgressTasks" element={<ProgressTasks />} />
            <Route path="CompletedTasks" element={<CompletedTasks />} />
            <Route path="IncompleteTasks" element={<IncompleteTasks />} />
          </Route>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
