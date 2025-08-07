import React, { useContext } from 'react'
import { SkillContext } from '../contexts/SkillContext'

const Workflow= () =>{
  const {workflows}=useContext(SkillContext)
  return(
    <>
    <div className="subheading mb-3">İş Akışı</div>
    <ul className="fa-ul mb-0">
      {
        workflows.map(workflow=> <li>
          <span className="fa-li"><i className={workflow?.icon}/> </span>
          {workflow?.title}
        </li>)
      }
    </ul>
    </>
  )
}

export default Workflow