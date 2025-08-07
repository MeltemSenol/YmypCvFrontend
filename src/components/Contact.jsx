import React, { useContext } from 'react'
import {ContactContext} from '../contexts/ContactContext'

const Contact = () => {
  const {contacts}=useContext(ContactContext);
  const info=contacts[0];
  return (
     <div className="subheading mb-5">
          {info?.address} · {info?.town} · {info?.city} · <a href={`tel:+9${info?.phone}`}>{info?.phone}</a>
          {" "}<a href={`mailto:${info?.email}`}>{info?.email}</a>
        </div>
  )
}

export default Contact