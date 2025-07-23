import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './pages/Portfolio.tsx'
import './index.css'
import { Analytics } from "@vercel/analytics/next"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Portfolio />
    <Analytics />
  </React.StrictMode>,
)
