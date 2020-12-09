import styles from '../styles/Home.module.sass'
import {Container, Row, Col } from 'react-bootstrap'
import { FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';



function Footer() {
    return (
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
    )
}

export default Footer