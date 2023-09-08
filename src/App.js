
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import TestPage from './pages/TestPage';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/test' element={<TestPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
