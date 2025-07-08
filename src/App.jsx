import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import SignUp from'./components/SignUp'
import SignIn from './components/SignIn';
import Dashboard from './pages/Dashboard';

function App() {

  return (
     <Router>
      <div className='min-h-screen w-full overflow-hidden'>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<SignUp />} /> {/* fallback */}
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
        
      </div>
    </Router>
  )
}

export default App
