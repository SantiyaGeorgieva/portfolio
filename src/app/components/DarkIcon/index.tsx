import { Collapse, Nav, NavItem, Navbar } from "reactstrap";
import Link from "next/link";
import { links } from "../../../../constants";
import './darkIcon.scss';

export default function DarkIcon({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: any }) {
  const toggleMobileMenu = (e) => {
    e.preventDefault();
    setIsOpen(prevState => !prevState);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Navbar expand="md" className={`small ${isOpen ? 'bc-dark' : ''}`}>
      <div className="menuToggle" onClick={toggleMobileMenu}>
        <span className={`${isOpen ? 'close-dark-icon close' : 'hamburger-dark-icon'}`}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="menu" navbar>
          {links.map((element, i) => {
            return (isOpen && <NavItem
              onClick={({ target }) => {
                target && target?.classList.toggle('active');
                handleLinkClick();
              }}
              key={i}>
              <Link href={element.to}>
                {element.name}
              </Link>
            </NavItem>)
          })}
        </Nav>
      </Collapse>
    </Navbar>
  )
}