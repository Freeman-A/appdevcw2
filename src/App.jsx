import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Manage from './pages/Manage.jsx';
import Insights from './pages/Insights.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/Manage'} />} />
        <Route path="/Manage" element={<Manage />} />
        <Route path="/Insights" element={<Insights />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
