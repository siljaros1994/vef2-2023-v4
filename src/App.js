import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Department } from './components/departments/Department';
import { Departments } from './components/departments/Departments';
import NotFound from './components/NotFound/NotFound';
import Courses from './components/courses/Courses';


function App({titleName, department}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kennsluskráin</h1>
        <Router>
          <Routes>
            <Route exact path="/" element={<Departments titleName={titleName} />} />
            <Route exact path="/departments/:slug" element={<Department department='Deild'/>} />
            <Route exact path="/departments/:slug/courses" element={<Courses titleName="Námskeið" />} />
            <Route exact path="/departments/:slug/courses/:courseId" element={<Courses/>} />
            <Route exact path="/*" element={<NotFound titleName="Síða fannst ekki" />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;