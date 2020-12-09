import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import {Container, Nav, Navbar, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { FaTwitter, FaLinkedin, FaYoutube, FaHouseDamage, FaMoneyBillAlt, FaUsers } from 'react-icons/fa';



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
              <Nav.Link className={styles.proLink}href="#deets">Are You A Local Pro?</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </nav>
        <div className={styles.imageContainer}>
          <Image
            className={styles.landingImage}
            src="/images/hacienda.jpg"
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
            <h1 className="text-center " >How It Works</h1>
          </div>
          <Container>
            <Row>
              <Col className={styles.aboutCols} xs={12} md={4} >
                <FaHouseDamage size="3rem" />
                <p>
                  Specify the kind of help you need 
                </p>
              </Col>
              <Col className={styles.aboutCols} xs={12} md={4} >
                <FaMoneyBillAlt size="3rem" />
                <p>
                  Pay A Small Fee 
                </p>
              </Col>
              <Col className={styles.aboutCols} xs={12} md={4} >
                <FaUsers size="3rem" />
                <p>
                  Recieve A List of Matching Pros In Your Area
                </p>
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
