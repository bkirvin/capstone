import './css/App.scss';
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Reservation from './pages/Reservation'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/reservations" element={<Reservation />} />
      </Routes>
    </>
  );
}

export default App;
