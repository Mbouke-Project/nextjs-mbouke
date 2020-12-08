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
        <section className='about'>
          <h1>Get Started</h1>
          <Container>
            <Row>
              <Col>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sunt itaque aliquam ullam quis eveniet iure labore quos sed, omnis amet facere sapiente, accusantium dolor fugiat id quidem eaque voluptatum!</Col>
              <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rerum et, pariatur necessitatibus, provident eaque, saepe architecto nam nisi totam aspernatur recusandae! Labore repellat distinctio ex nesciunt illo, deserunt fugiat.</Col>
              <Col>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quam nobis repudiandae soluta libero amet sapiente, possimus dicta aperiam commodi molestiae corrupti mollitia culpa ipsa error nostrum placeat? Sed, fugiat?</Col>
            </Row>
          </Container>
        </section>

        <footer>

        </footer>
      </main>


    </div>
  )
}
