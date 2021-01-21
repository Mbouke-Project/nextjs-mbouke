import { useRouter } from 'next/router'
import styles from '../styles/Home.module.sass'
import Link from 'next/link'
import { Nav, Navbar } from 'react-bootstrap'


function Navigation() {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.token = ""
    router.push('/')
  }

  const displayLogin = () => {
    if (!!localStorage.token) {
      return (
        <Nav.Link>
        <button onClick={ () => handleLogout(router) }className={styles.navLinks}>
          Logout
        </button>
      </Nav.Link>
      )
    }
    return (
      <>
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
      </>
    )
  }
  
    return (
        <nav>
        <Navbar collapseOnSelect expand="md"  variant="light" >
          <Link className={styles.navLinks} href="/">Mbouke</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link href='/nextSignup' className={styles.navLinks}>
                  Next Sign Up
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href='/profile' className={styles.navLinks}>
                  Profile
                </Link>
              </Nav.Link>
              {displayLogin()}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    )
}

export default Navigation