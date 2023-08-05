import Signup from './components/signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Student from './pages/student';


function App() {
  return (
    <div className="main">
      <Router>
        
         <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/student" element={<Student />} />
         </Routes>
      </Router>
    

    </div>
  );
};

export default App;
