import Head from 'next/head'

import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import {Container, Nav, Navbar, Row, Col, Form, Button } from 'react-bootstrap'
import { FaHouseDamage, FaMoneyBillAlt, FaUsers } from 'react-icons/fa';
import Navigation from '../components/navigation.js'
import Footer from '../components/footer.js'



export default function Home() {
  return (
    <div >
      <Head>
        <title>Mbouke Beta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
       
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
        <Footer />
      </main>
    </div>
  )
}
