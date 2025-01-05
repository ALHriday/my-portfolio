import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './Routers/Router';
import './index.css'


import {
  RouterProvider
} from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-7xl mx-auto scroll-smooth'>
      <AuthProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </AuthProvider>
    </div>
  </StrictMode>,
)
