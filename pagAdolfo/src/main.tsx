import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ContentPages } from '../src/Components/nav/navBar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <BrowserRouter>

    <App />
    
  
   {/* Paginas */}
   <ContentPages/>
    
    {/* Footer */}
  </BrowserRouter>
</React.StrictMode>
)
