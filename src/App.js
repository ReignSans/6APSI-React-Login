import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './LoginPage';
import Landing from './LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;