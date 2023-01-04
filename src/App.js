import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MoviesDetail from './pages/MoviesDetail';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetail />} />
      </Routes>
    </>
  );
}

export default App;
