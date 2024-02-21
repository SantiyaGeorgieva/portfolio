'use client'

import Link from 'next/link';
import Image from 'next/image';
import { Col, Row } from 'reactstrap';
import PokrivalaNetLogo from '../../../../public/images/pokrivalanet-logo.png';
import VigLogo from '../../../../public/images/vig-logo.png';
import ChimtexLogo from '../../../../public/images/chimtex.png';
import AcrostiaLogo from '../../../../public/images/acrostia.png';
import AviataLogo from '../../../../public/images/aviata.png';
import RomaProjectLogo from '../../../../public/images/romaproject.png';
import GoogleLogo from '../../../../public/images/google.png';
import WeatherLogo from '../../../../public/images/weather.png';
import detectVersion from '../../../../utils/functions';

import './projectsComponent.scss';

export default function ProjectsComponent() {
  const isMobile = detectVersion();

  return (
    <div className="projects-wrapper">
      <div className="title-projects pageHeader">
        <h2>Pro<span>j</span>ects</h2>
      </div>
      {isMobile ? 
      <>
        <Row>
          <Col md={3}>
            <Link href="https://project-exam.onrender.com" target="_blank">
              <Image
                priority
                src={AviataLogo}
                alt="logo"
              />
            </Link>
          </Col>
          <Col md={3}>
            <Link href="https://weather-app-0v61.onrender.com" target="_blank">
              <Image
                priority
                src={WeatherLogo}
                alt="logo"
              />
            </Link>
          </Col>
          <Col md={3}>
            <Link href="https://pokrivala.net" target="_blank">
              <Image
                priority
                src={PokrivalaNetLogo}
                alt="logo"
              />
            </Link>
          </Col>
          <Col md={3}>
            <Link href="https://chimtex.onrender.com" target="_blank">
              <Image
                priority
                src={ChimtexLogo}
                alt="logo"
              />
            </Link>
          </Col>
          <Col md={3}>
            <Link href="https://acrostia.onrender.com" target="_blank">
              <Image
                priority
                src={AcrostiaLogo}
                alt="logo"
              />
            </Link>
          </Col>
          <Col md={3}>
            <Link href="https://romaproject.onrender.com" target="_blank">
              <Image
                priority
                src={RomaProjectLogo}
                alt="logo"
              />
            </Link>
          </Col>
          <Col md={3}>
            <Link href="https://searchx-z9tm.onrender.com" target="_blank">
              <Image
                priority
                src={GoogleLogo}
                alt="logo"
              />
            </Link>
          </Col>
          <Col md={3}>
            <Link href="https://viggroup-bg.com" target="_blank">
              <Image
                priority
                src={VigLogo}
                alt="logo"
              />
            </Link>
          </Col>
        </Row>
      </>
      :
      <>
        <Row>
          <Col md={3}>
            <Link href="https://project-exam.onrender.com" target="_blank">
              <Image
                priority
                src={AviataLogo}
                alt="logo"
              />
            </Link>
          </Col>
          <Col md={4}>
            <Link href="https://weather-app-0v61.onrender.com" target="_blank">
              <Image
                priority
                src={WeatherLogo}
                alt="logo"
              />
            </Link>
          </Col>
          <Col md={5}>
            <Link href="https://pokrivala.net" target="_blank">
              <Image
                priority
                src={PokrivalaNetLogo}
                alt="logo"
              />
            </Link>
          </Col>
          <Col md={3} className="ml-80">
            <Link href="https://chimtex.onrender.com" target="_blank">
              <Image
                priority
                src={ChimtexLogo}
                alt="logo"
              />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="ml-n-80">
            <Link href="https://acrostia.onrender.com" target="_blank">
              <Image
                priority
                src={AcrostiaLogo}
                alt="logo"
              />
            </Link>
          </Col>
          <Col md={2} className={`${isMobile ? 'mt-n-50' : ''}`}>
            <Link href="https://romaproject.onrender.com" target="_blank">
              <Image
                priority
                src={RomaProjectLogo}
                alt="logo"
              />
            </Link>
          </Col>
          <Col md={6}>
            <Link href="https://searchx-z9tm.onrender.com" target="_blank">
              <Image
                priority
                src={GoogleLogo}
                alt="logo"
              />
            </Link>
          </Col>
          <Col md={5} className="mt-40 ml-n-450">
            <Link href="https://viggroup-bg.com" target="_blank">
              <Image
                priority
                src={VigLogo}
                alt="logo"
              />
            </Link>
          </Col>
        </Row>
      </>
      }
    </div>
  )
}