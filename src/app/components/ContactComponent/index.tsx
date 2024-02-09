'use client'

import Link from "next/link"
import './contactComponent.scss'

export default function ContactComponent() {
  return (
    <div className="contact-wrapper">
      <div className="title-contact">
        <h2 className="pageHeader">Hello.</h2>
      </div>
      <div className="description-contact pageContent">
        <p>Need a beautiful, well-structured website ?</p>
        <p>Don`t hesitate to contact me via the links below.</p>
        <p>
          Email:&nbsp;<Link href="mailto:santiyageorgieva@yahoo.com" passHref={true} className="light-text">santiyageorgieva@yahoo.com</Link>
        </p>
        <p>On the Internet:&nbsp;
          <Link href="https://www.linkedin.com/in/santiya-georgieva-919674281" target="_blank" passHref={true} className="light-text">LinkedIn</Link>&nbsp;/&nbsp;
          <Link href="https://github.com/SantiyaGeorgieva" target="_blank" passHref={true} className="light-text">Github</Link>
        </p>
      </div>
    </div>
  )
}