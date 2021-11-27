import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DriftPage from './pages/DriftPage';
import TimeAttackPage from './pages/TimeAttackPage';
import ForzaPage from './pages/ForzaPage';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/homeworks-router-menu/" exact element={<HomePage/>} />
            <Route path="/homeworks-router-menu/drift" element={<DriftPage/>} />
            <Route path="/homeworks-router-menu/timeattack" element={<TimeAttackPage />} />
            <Route path="/homeworks-router-menu/forza" element={<ForzaPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;