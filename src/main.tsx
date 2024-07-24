import './style/index.css'

import LandingPage from './features/landing-page/index.tsx'
import Layout from './component/layout.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <LandingPage /> */}
    <Layout/>
  </React.StrictMode>,
)
