import React, { createContext, useEffect, useState } from 'react'
const SkillContext=createContext();

const SkillContextProvider = ({children}) => {
    const[programAndTools,setProgramAndTools]=useState([]);
    const[workflows,setWorkFlows]=useState([]);

    const getProgramAndTools=async()=>{
        try {
            const response=await fetch("http://localhost:5261/api/Skills/GetProgramLanguageAndTool");
            const data=await response.json();
            setProgramAndTools(data);
            
        } catch (error) {
            console.error("Programlama dilleri ve araçlar getirilemedi.",error);
            
        }
    }
    const getWorkFlows=async()=>{
        try {
            const response=await fetch("http://localhost:5261/api/Skills/GetWorkflows");
            const data=await response.json();
            setWorkFlows(data);
            
        } catch (error) {
            console.error("İş akışları getirilemedi.",error);
            
        }
    }
  useEffect(()=>{
    getProgramAndTools();
    getWorkFlows();
  },[])

  const skillValues={
    programAndTools,
    workflows,
    setProgramAndTools,
    setWorkFlows
  }
  return <SkillContext.Provider value={skillValues}>
    {children}
  </SkillContext.Provider>
}

export {SkillContext,SkillContextProvider}