import React from 'react';
import Home from './pages/Home';
import AllTasks from "./pages/AllTasks";
import ProgressTasks from "./pages/ProgressTasks"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="bg-gray-700 text-white h-screen p-2">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<AllTasks />} />
            <Route path="/ProgressTasks" element={<ProgressTasks />}/>

          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
