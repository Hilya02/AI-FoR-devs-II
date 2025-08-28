
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import PollsDashboard from './pages/PollsDashboard';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/polls" replace />} />
        <Route path="/polls" element={<PollsDashboard />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
