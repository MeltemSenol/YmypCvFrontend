import React, { useContext } from 'react'
import {InterestContext} from '../contexts/InterestContext'

const Interests = () => {
  const{interests}=useContext(InterestContext)
  return (
    <section className="resume-section" id="interests">
      <div className="resume-section-content">
        <h2 className="mb-5">İlgi Alanları</h2>

        {
          interests.map(interest=><div className="mb-0" key={interest?.id}>{interest?.description}</div>)
        }
       
        
      </div>
    </section>
  )
}

export default Interests