import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.sass'
import {Container, Nav, Navbar, Row, Col } from 'react-bootstrap'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Mbouke Beta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav>
        <Navbar collapseOnSelect expand="md"  variant="light" className="bg-light" >
          <Navbar.Brand href="#home">Mbouke</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#deets">Sign Up</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Log In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </nav>
        <div className='landing-image'>
          <Image
            src="/images/world-map-night.jpg"
            alt="Picture of the author"
            layout='responsive'
            width={1000}
            height={500}
            priority={true}
          />
        </div>

      </main>


    </div>
  )
}
