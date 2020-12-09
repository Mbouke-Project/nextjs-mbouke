import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import {Container, Nav, Navbar, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { FaBeer, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';



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
        <div className={styles.imageContainer}>
          <Image
            className={styles.landingImage}
            src="/images/world-map-night.jpg"
            alt="Picture of the author"
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            // width={1000}
            // height={500}
            // priority={true}
          />
          <h1 className={styles.landingText}>Find Pros In Your Country</h1>
          <Form className={styles.landingForm}>
            <Row noGutters={true}>
              <Col xs={2}>
              </Col>
              <Col xs={6}  >
                <Form.Control size='lg' placeholder='e.g. "Plumber" or "Handyman"'/>
              </Col>
              <Col >
                <Button size='lg' variant="primary" type="submit">
                  Find Pros
                </Button>              
              </Col>
              <Col xs={2}>

              </Col>
            </Row>
          </Form>
        </div>

        <section className='about'>
          <div className={styles.sectionTitle}>
            <h1 className="text-center " >Get Started Now</h1>
          </div>
          <Container>
            <Row>
              <Col xs={12} md={4} >
                <Card>
                  <Card.Body> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sunt itaque aliquam ullam quis eveniet iure labore quos sed, omnis amet facere sapiente, accusantium dolor fugiat id quidem eaque voluptatum!</Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4} >
                <Card>
                  <Card.Body> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rerum et, pariatur necessitatibus, provident eaque, saepe architecto nam nisi totam aspernatur recusandae! Labore repellat distinctio ex nesciunt illo, deserunt fugiat.</Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4} >
                <Card>
                  <Card.Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quam nobis repudiandae soluta libero amet sapiente, possimus dicta aperiam commodi molestiae corrupti mollitia culpa ipsa error nostrum placeat? Sed, fugiat? </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <footer className={styles.sectionFooter}>
          <Container>
            <Row>
              <Col xs={6}>
                <div className={styles.footerIconsContainer}>
                  <FaTwitter className={styles.footerIcons} size="2rem" color="#00acee" /> 
                  <FaLinkedin className={styles.footerIcons} size="2rem" color="#0072b1" />
                  <FaYoutube className={styles.footerIcons} size="2rem" color="red"/>
                </div>
                <p>Learn More</p>
                <p>Privacy Policy</p>
              </Col>
              <Col xs={6}>
                <h4 className='text-right'>Mbouke</h4>
                <p className='text-right'>Connecting Workers</p>
                <p className='text-right'>All Rights Reserved 2020</p>
              </Col>
            </Row>
          </Container>

        </footer>
      </main>


    </div>
  )
}
