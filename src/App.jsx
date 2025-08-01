import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn';
import Dashboard from './pages/Dashboard';
import VitalTask from './pages/VitalTask';
import MyTask from './pages/Mytask';
import TaskCategories from './pages/TaskCategories';
import Settings from './pages/Settings';
import Help from './pages/Help';
import { TaskProvider } from './components/TaskContext';
import { TaskMetaProvider } from './components/TaskMetaContext';



function App() {

  return (
    <Router>
      <TaskProvider>
        <TaskMetaProvider>
          <div className='min-h-screen w-full overflow-hidden'>
            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />

              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/vital-task" element={<VitalTask />} />
              <Route path="/my-task" element={<MyTask />} />
              <Route path="/task-categories" element={<TaskCategories />} />

              <Route path="/settings" element={<Settings />} />
              <Route path="/help" element={<Help />} />
              <Route path="*" element={<SignUp />} /> {/* fallback */}
            </Routes>

          </div>
        </TaskMetaProvider>
      </TaskProvider>
    </Router>
  )
}

export default App
