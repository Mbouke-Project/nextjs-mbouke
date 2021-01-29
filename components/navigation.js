import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/client'

import styles from '../styles/Home.module.sass'
import Link from 'next/link'
import { Nav, Navbar } from 'react-bootstrap'


function Navigation() {

  const [session, loading] = useSession()

  const router = useRouter()

  const handleLogout = () => {

    // localStorage.token = ""
    // router.push('/')
    // alert("You have been logged out")
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
              {!session ?       
                  <>
                  <button onClick={signIn}>Github SignIn</button>
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
                  </> : 
                  <Nav.Link>
                    <span>{session.user.name}</span>
                    {session.user.image && (
                      <img 
                        src={session.user.image}
                        style={{ width: "25px"}}
                      />
                    )
                    }
                    <button onClick={signOut} className={styles.navLinks}>
                      Logout
                    </button>
                  </Nav.Link>
                  }
              {/* {!!localStorage ? displayLogin() : null} */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    )
}

export default Navigation