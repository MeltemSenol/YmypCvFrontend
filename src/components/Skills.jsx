import React from 'react'
import ProgramLanguageAndTool from './ProgramLanguageAndTools'
import Workflow from './Workflow'

const Skills = () => {
  return (
   <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
       <ProgramLanguageAndTool/>
       
       <Workflow/>
      </div>
    </section>
  )
}

export default Skills