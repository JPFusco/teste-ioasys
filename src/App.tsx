import './App.css';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import GlobalContextProvider from './contexts/GlobalContext';
import useGlobalContext from './hooks/useGlobalContext';

function RotasProtegidas({ children }: { children: JSX.Element }) {
  const { authToken } = useGlobalContext();

  if (!authToken) {
    return <Navigate to="/" />;
  }

  return children;
}

function RotasDesprotegidas({ children }: { children: JSX.Element }) {
  const { authToken } = useGlobalContext();

  if (authToken) {
    return <Navigate to="/home" />;
  }

  return children;
}

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={(
                <RotasDesprotegidas>
                  <Login />
                </RotasDesprotegidas>
              )}
            />
            <Route
              path="/home"
              element={(
                <RotasProtegidas>
                  <Home />
                </RotasProtegidas>
              )}
            />
          </Routes>
        </Router>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
