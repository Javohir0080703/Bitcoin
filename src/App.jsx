import React, { useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
const App = () => {
  const [language, setLanguage] = useState("ru")
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout language={language} setLanguage={setLanguage} />}>
        <Route path="/" element={<Home language={language} setLanguage={setLanguage} />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App