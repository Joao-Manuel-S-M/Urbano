import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Config Router 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Import Pages
import Home from './pages/home/Home.jsx'
import Hospedagens from './pages/hospedagens/Hospedagens.jsx'
import Sobre from './pages/sobre/Sobre.jsx'
import Contato from './pages/contato/Contato.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },

//   {
//     path: "hospedagens",
//     element: <Hospedagens />
//   },

//   {
//     path: "sobre",
//     element: <Sobre />
//   },

//   {
//     path: "contato",
//     element: <Contato />
//   },

  
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
    
      {
        path: "hospedagens",
        element: <Hospedagens />
      },
    
      {
        path: "sobre",
        element: <Sobre />
      },
    
      {
        path: "contato",
        element: <Contato />
      },
    ]
  },

  

  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
