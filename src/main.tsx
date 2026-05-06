import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Portfolio from './pages/Portfolio.tsx'
import CaseEmergencyWater from './pages/CaseEmergencyWater.tsx'
import './index.css'
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/case/emergency-water" element={<CaseEmergencyWater />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </React.StrictMode>,
)
