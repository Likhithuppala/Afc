import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/user/landing-page';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
