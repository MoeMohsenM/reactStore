import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartContextProvider } from './context/cartContext/cartContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CartContextProvider>
    <App />
    </CartContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
