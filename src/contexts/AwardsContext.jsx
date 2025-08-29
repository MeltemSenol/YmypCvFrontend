import React, { createContext, useEffect, useState } from 'react'
const AwardsContexts=createContext();


const AwardsContextProvider = ({children}) => {
    const[awards,setAwards]=useState([]);

    const getAwards=async () => {
        try {
            const response=await fetch("http://localhost:5261/api/Certificates");
            const data=await response.json();
            setAwards(data);
            
        } catch (error) {
            console.error("Ödül ve sertifikalar listelenemedi...",error)
            
        }
        
    }
    useEffect(()=>{
        getAwards();
    },[]);
    const awardValues={
        awards,
        setAwards
    }
  return <AwardsContexts.Provider value={awardValues}>
        {children}
    </AwardsContexts.Provider>
  
}

export {AwardsContexts,AwardsContextProvider}