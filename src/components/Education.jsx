import React, { useContext } from 'react'
import { EducationContext } from '../contexts/EducationContext'

const Education = () => {
  const {educations}=useContext(EducationContext);
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Eğitimler</h2>
        {educations.map(education=><div className="d-flex flex-column flex-md-row justify-content-between mb-5" key={education?.id}>
          <div className="flex-grow-1">
            <h3 className="mb-0">{education?.school}</h3>
            <div className="subheading mb-3">{education?.section}</div>
            <div>{education?.department}-{education?.grade}</div>
            <p>GPA: {education?.gpa}</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">{new Date(education?.startDate).toLocaleDateString()}-{education?.endDate ? new Date(education.endDate).toLocaleDateString():"Devam ediyor"}</span></div>
        </div>)}
        
       
      </div>
    </section>
  )
}

export default Education