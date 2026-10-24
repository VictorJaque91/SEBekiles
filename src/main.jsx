import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'   // ← ny import
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>        {/* ← öppnas runt App */}
      <App />
    </BrowserRouter>       {/* ← stängs efter App */}
  </StrictMode>,
)