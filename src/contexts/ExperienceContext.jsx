import React, { createContext, useEffect, useState } from 'react'
const ExperienceContext=createContext();

const ExperienceContextProvider = ({children}) => {
  const [experiences, setExperiences]=useState([]);
  useEffect(()=>{
    const getExperiences=async()=>{
    try {
      const response=await fetch("http://localhost:5261/api/Experiences");
      const data=await response.json();
      setExperiences(data);
      
    } catch (error) {
      console.error("Deneyimler listelenemedi",error);
      
    }
  }
  
    getExperiences();
  },[]);

  const experienceValues={
    experiences,
    setExperiences
  }
  return <ExperienceContext.Provider value={experienceValues}>
    {children}
  </ExperienceContext.Provider>
}
export {ExperienceContext,ExperienceContextProvider};