import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PersonalInfoContextProvider } from './contexts/PersonalInfoContext.jsx'
import {ContactContextProvider} from './contexts/ContactContext.jsx'
import { AboutContextProvider } from './contexts/AboutContext.jsx'
import { SocialAccountContextProvider } from './contexts/SocialAccountContext.jsx'
import { ExperienceContextProvider } from './contexts/ExperienceContext.jsx'
import { EducationContextProvider } from './contexts/EducationContext.jsx'
import { SkillContextProvider } from './contexts/SkillContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonalInfoContextProvider>
      <ContactContextProvider>
        <AboutContextProvider>
          <SocialAccountContextProvider>
            <ExperienceContextProvider>
              <EducationContextProvider>
                <SkillContextProvider>
<App /> 
                </SkillContextProvider>

              </EducationContextProvider>

            </ExperienceContextProvider>

          </SocialAccountContextProvider>
 
        </AboutContextProvider>
 
      </ContactContextProvider>
     
    </PersonalInfoContextProvider>
    
  </StrictMode>,
)
