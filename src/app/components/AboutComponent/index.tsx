'use client'

import Link from "next/link";
import { Button } from "reactstrap";
import detectVersion from "../../../../utils/functions";

import './aboutComponent.scss';

export default function AboutComponent() {
  const isMobile = detectVersion();

  return (
    <div className="about-wrapper">
      <div>
        <h2 className="pageHeader">About</h2>
        <div className="about-me" />
      </div>
      <div className="about-text pageContent">
        {isMobile ? 
          <>
            <p>I’m Santiya.</p>
            <p>A designer, maker</p>
            <p>and problem solver.</p>
          </> 
        : <>
            <p>I’m Santiya. A designer,</p>
            <p>maker and problem solver.</p>
          </>
        }
        <p>
          The cusp of art and technology has always fascinated me and 
          I’ve never been afraid to just jump in and give it a go, whether it’s Paint, Photoshop, Figma or CSS. 
          I’ve been designing with computers since the day I first opened Microsoft Paint.
        </p>
        <p>
          During my bachelor education I had the opportunity to learn the basics of web programming in particular the client technologies.
          Continued to expand my knowledge via many self-studies, internships as frontend developer and working as so.
        </p>
        <p>I want to make, design or build ideas and products that are real, that matter and have an impact in the world.</p>
        <h3>experience</h3>
        <p>- Degree in Computer Systems and Technologies</p>
        <p>- 4+ years experience in Frontend development</p>
        <h3>skills</h3>
        <p>HTML&CSS / Javascript / React / jQuery / NodeJS / ExpressJS / NextJS / Figma / AdobeXD / Photoshop / UI | UX Design</p>
        <Link href="/documents/Santiya_Georgieva-Resume(CV).pdf" download="Santiya_Georgieva-Resume(CV).pdf" target="_blank">
          <Button type="button" className="mb-3 button dark-button">
            My CV
          </Button>  
        </Link>
        <p className="pb-1">
          Most of what is in this portfolio is team work. 
          It’s very rare these days to make anything great all on your own. 
          I have only included work that I had a contribution to, but whether 
          it’s design, ideas, UX, process, engineering, mentorship, advice or 
          creative direction, my family, collegues, friends have influenced my 
          growth and career path in a massive way.
          <span className="d-flex text-uppercase fw-bold mt-2">thank you.</span>
        </p>
        <Link href="/contact">
          <Button type="button" className="mb-0 button dark-button">
            Contact me
          </Button>  
        </Link>
      </div>
    </div>
  )
}