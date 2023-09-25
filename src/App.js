
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import TestPage from './pages/TestPage';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/auth' element={<AuthPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
