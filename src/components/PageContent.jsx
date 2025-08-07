import React from 'react'
import About from './About'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import Interests from './Interests'
import Awards from './Awards'

const PageContent = () => {
  return (
   <div className="container-fluid p-0">
    {/* About*/}
    <About/>
    <hr className="m-0" />
    {/* Experience*/}
    <Experience/>
    <hr className="m-0" />
    {/* Education*/}
   <Education/>
    <hr className="m-0" />
    {/* Skills*/}
    <Skills/>
    <hr className="m-0" />
    {/* Interests*/}
    <Interests/>
    <hr className="m-0" />
    {/* Awards*/}
    <Awards/>
  </div>
  )
}

export default PageContent