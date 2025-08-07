import React, { createContext, useEffect, useState } from 'react'
const ContactContext=createContext();

const ContactContextProvider = ({children}) => {
    const [contacts,setContacts]=useState([]);
    useEffect(()=>{
        const getContacts=async()=>{
            try {
                const response=await fetch("http://localhost:5261/api/Contacts");
                const data=await response.json();
                setContacts(data);
                
            } catch (error) {
                console.error("İletişim bilgileri getirilmedi.",error)
                
            }
        }
        getContacts();
    },[]);
    const contactValues={
        contacts,
        setContacts
    }
  return <ContactContext.Provider value={contactValues}>
    {children}
</ContactContext.Provider>

}
export {ContactContext, ContactContextProvider};