import React, { createContext, useEffect, useState } from 'react'
const AboutContext=createContext();
const AboutContextProvider = ({children}) => {
    const [abouts,setAbouts]=useState([]);
    useEffect(()=>{
        const getAbouts=async()=>{

        try {
                const response=await fetch("http://localhost:5261/api/Abouts");
                const data=await response.json();
                setAbouts(data);
            }
            
         catch (error) {
            console.error("Hakkımda bilgileri getirilemedi.",error);
         }
            
        }
    
        getAbouts();

    },[]);
    const aboutValues={
        abouts,
        setAbouts
    }
  return <AboutContext.Provider value={aboutValues}>
{children}
  </AboutContext.Provider>
  
}

export {AboutContext,AboutContextProvider}