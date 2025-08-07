import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PersonalInfoContextProvider } from './contexts/PersonalInfoContext.jsx'
import {ContactContextProvider} from './contexts/ContactContext.jsx'
import { AboutContextProvider } from './contexts/AboutContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonalInfoContextProvider>
      <ContactContextProvider>
        <AboutContextProvider>
         <App /> 
        </AboutContextProvider>
 
      </ContactContextProvider>
     
    </PersonalInfoContextProvider>
    
  </StrictMode>,
)
