import React, { useContext } from 'react'
import { PersonalInfoContext } from '../contexts/PersonalInfoContext'

const PersonalInfo = () => {
  const {personalInfos}=useContext(PersonalInfoContext);

  return (
   <h1 className="mb-0">
          {personalInfos[0]?.firstName} {" "}
          
          <span className="text-primary">{personalInfos[0]?.lastName}</span>
        </h1>
 
  )
}

export default PersonalInfo