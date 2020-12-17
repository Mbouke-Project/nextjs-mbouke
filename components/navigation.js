import styles from '../styles/Home.module.sass'
import Link from 'next/link'
import { Nav, Navbar } from 'react-bootstrap'


function Navigation() {
    return (
        <nav>
        <Navbar collapseOnSelect expand="md"  variant="light" >
          <Link className={styles.navLinks} href="/">Mbouke</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                
              <Nav.Link>
                <Link href='/signup' className={styles.navLinks}>
                  Sign Up
                </Link>
              </Nav.Link>
                
              <Nav.Link >
                <Link href='/login'>
                Log In
                </Link>
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </nav>
    )
}

export default Navigation