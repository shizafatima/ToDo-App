import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TaskProvider } from './components/TaskContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <TaskProvider> 
      <App />
    </TaskProvider>
  </StrictMode>,
)
