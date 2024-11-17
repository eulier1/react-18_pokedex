import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/pokemon/:id" element={<DetailPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;