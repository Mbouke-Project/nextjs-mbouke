import styles from '../styles/Home.module.sass'
import Link from 'next/link'
import { Nav, Navbar } from 'react-bootstrap'


function Navigation() {
    return (
        <nav>
        <Navbar collapseOnSelect expand="md"  variant="light" className="bg-light" >
          <Navbar.Brand href="#home">Mbouke</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href='/signup'>
                  Sign Up
                {/* <Link href="/signup">Sign Up</Link> */}
                </Nav.Link>
              <Nav.Link href='login'>
                {/* <Link href="/login"> */}
                Log In
              {/* </Link> */}
              </Nav.Link>
              <Nav.Link href="#deets">Are You A Local Pro?</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </nav>
    )
}

export default Navigation