import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import CorporateLaw from './pages/practiceAreas/corporateLaw.jsx'
import FamilyLaw from './pages/practiceAreas/FamilyLaw.jsx'
import Litigation from './pages/practiceAreas/Litigation.jsx'
import RealState from './pages/practiceAreas/RealState.jsx'
import TechLaw from './pages/practiceAreas/TechLaw.jsx'
import CriminalDefense from './pages/practiceAreas/CriminalDefance.jsx'
import IntellectualProperty from './pages/practiceAreas/IntellectualProperty.jsx'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='corporate-law' element={<CorporateLaw />} />
      <Route path='family-law' element={<FamilyLaw />} />
      <Route path='litigation' element={<Litigation />} />
      <Route path='real-estate' element={<RealState />} />
      <Route path='tech-law' element={<TechLaw />} />
      <Route path='criminal-defense' element={<CriminalDefense />} />
      <Route path='intellectual-property' element={<IntellectualProperty />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
