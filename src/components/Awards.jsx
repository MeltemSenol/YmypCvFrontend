import React, { useContext } from 'react'
import { AwardsContexts } from '../contexts/AwardsContext'

const Awards = () => {
  const{awards}=useContext(AwardsContexts)
  return (
    <section className="resume-section" id="awards">
      <div className="resume-section-content">
        <h2 className="mb-5">Ödül ve Sertifikalar</h2>
        <ul className="fa-ul mb-0">
          {
            awards.map(award=><div className="mb-0" key={award?.id}>{award.title}{" - "}{award.organisation}{" - "}{award.description}{" - "}{award.dateAt}</div>)
            
          }
        </ul>
      </div>
    </section>
  )
}

export default Awards