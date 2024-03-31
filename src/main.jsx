import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Personas from './Personas'

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Personas", element: <Personas /> }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <RouterProvider router={router} />
  //</React.StrictMode>,
)
