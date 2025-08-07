import React, { useContext } from 'react'
import { ExperienceContext } from '../contexts/ExperienceContext'
 
const Experience = () => {
  const {experiences} = useContext(ExperienceContext)
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Deneyimler</h2>
        {
          experiences.map(experience => <div className="d-flex flex-column flex-md-row justify-content-between mb-5" key={experience?.id}>
          <div className="flex-grow-1">
            <h3 className="mb-0">{experience?.title}</h3>
            <div className="subheading mb-3">{experience?.company}</div>
            <p>{experience?.description}</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">{new Date(experience?.startDate).toLocaleDateString()} - {experience?.endDate ? new Date(experience?.endDate).toLocaleDateString() : "Devam ediyor"}</span></div>
        </div> )
        }
       
      </div>
    </section>
  )
}
 
export default Experience
 
 