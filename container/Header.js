import { Nav, Navbar } from 'react-bootstrap';
import { routes } from '../helpers/route';

const Header = () => {
  const renderMenuList = () => routes.map((item,i) => {
    return  <Nav.Item className="menu-text" key={i}>{item.name}</Nav.Item>
  })

  return (
    <Navbar expand="lg" variant="dark">
        <Navbar.Brand>
          <img className="logo" src="/logo.png"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-list"/>
        <Navbar.Collapse className="justify-content-end" id="menu-list">
          <Nav>
            {renderMenuList()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Header;