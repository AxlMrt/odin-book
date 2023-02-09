import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Home from './page/home/Home';
import Login from './page/login/Login';

function App() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={isLogged ? <Home /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
