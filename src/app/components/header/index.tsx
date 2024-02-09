'use client'

import React, { useState, useEffect } from 'react';
import {
  Row, 
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import detectVersion from '../../../../utils/functions';
import LightLogo from '../../../../public/light-logo.svg';
import DarkLogo from '../../../../public/dark-logo.svg';

import './header.scss';
import AnimatedLink from '../AnimatedLink';

export default function Header({ classname }: { classname: string }) {
  const isMobile = detectVersion();
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const pathname = usePathname();
  const [sticky, setSticky] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 50 ? "scrollbar" : "";
    setSticky(stickyClass);
  };

  return (
    <div className={`container-fluid ${classname === 'light-background' ? 'about-header-links' : ''}`}>
      <Row className={`align-items-center ${sticky ? 'scrollbar' : ''}`}>
        {isMobile ? 
        <div className="mobile-header-links">
          <Navbar color="faded" light>
            <NavbarToggler onClick={toggleNavbar} className="me-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <Link href="/projects" className={pathname == "/projects" ? "active" : ""}>projects</Link>
                </NavItem>
                <NavItem>
                  <Link href="/about" className={pathname == "/about" ? "active" : ""}>about</Link>
                </NavItem>
                <NavItem>
                  <Link href="/contact" className={pathname == "/contact" ? "active" : ""}>contact</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        : <Col className="text-start">
          <div className="header-links">
            <AnimatedLink href="/projects" hasActiveClass={pathname == '/projects' ? true : false}>projects</AnimatedLink>
            <AnimatedLink href="/about" hasActiveClass={pathname == '/about' ? true : false}>about</AnimatedLink>
            <AnimatedLink href="/contact" hasActiveClass={pathname == '/contact' ? true : false}>contact</AnimatedLink>
            {pathname !== '/' && <AnimatedLink hasActiveClass={false} href="/">
              <Image
                priority
                src={pathname !== '/about' ? LightLogo : DarkLogo}
                alt="logo"
                className="logo"
              />
            </AnimatedLink>}
          </div>
          <hr className={isMobile ? 'line-xs' : "line"} data-content="&nbsp;&nbsp;" />
        </Col>
        }
      </Row>
    </div>
  )
}