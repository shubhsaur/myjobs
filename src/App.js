import './App.css';
import {getPostedJobs} from './api/jobsApi'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import JobList from './pages/JobList';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/dashboard' element={<JobList />} />
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
