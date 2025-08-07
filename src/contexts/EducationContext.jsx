import React, { createContext, useEffect, useState } from 'react'
const EducationContext=createContext();

const EducationContextProvider = ({children}) => {

    const[educations, setEducations]=useState([]);

    const getEducations=async()=>{
        try {
            const response=await fetch("http://localhost:5261/api/Educations");
            const data=await response.json();
            setEducations(data);
            
        } catch (error) 
        {
            console.error("Eğitim bilgileri getirilemedi.",error)
        }
    }
    useEffect(()=>{
getEducations();
    },[]);
    const educationValues={
        educations,
        setEducations
    }
  return <EducationContext.Provider value={educationValues}>
    {children}
  </EducationContext.Provider>
    
  
}

export {EducationContext,EducationContextProvider}