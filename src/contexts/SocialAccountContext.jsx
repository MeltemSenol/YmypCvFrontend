import React, { createContext, useEffect, useState } from 'react'
const SocialAccountContext=createContext();

const SocialAccountContextProvider = ({children}) => {
    const[socialAccounts,setSocialAccounts]=useState([]);
    const getSocialAccounts=async()=>{
        try {
                const response=await fetch("http://localhost:5261/api/SocialAccounts");
                const data=await response.json();
                setSocialAccounts(data);
                
            } catch (error) {
                console.error("Sosyal hesaplar listelenemedi...", error);
                
            }
    }
    useEffect(()=>{
        getSocialAccounts();
            
            
        },[]);
       
        const socialAccountValues={
            socialAccounts,
            setSocialAccounts

        } 
        return <SocialAccountContext.Provider value={socialAccountValues}>
            {children}
        </SocialAccountContext.Provider>
    } 
    
  


export {SocialAccountContext,SocialAccountContextProvider}