import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import GlobalContextProvider from './contexts/GlobalContext';

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
