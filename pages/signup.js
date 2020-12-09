import {Container, Nav, Navbar, Row, Col, Form, Button } from 'react-bootstrap'
import styles from '../styles/Utils.module.sass'
import Navigation from '../components/navigation.js'

import Footer from '../components/footer.js'
import { FaCheckCircle } from 'react-icons/fa'


function Signup() {
    return (
        <div>
            <Navigation />
            <div className={styles.content}>
                <Container>
                    <Row>
                        <Col xs={12} md={5} className={styles.signupContainer}>
                            <h2>Join Our Network Of Pros</h2>
                            <Form>
                                <Form.Group contropd="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group contropd="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group contropd="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col xs={12} md={7} className="d-none d-md-block "  >
                            <div className="text-center">
                                <h2>Why Join?</h2>
                            </div>
                            <div className='fa-ul' className="text-left">
                                <p><FaCheckCircle color='green' size='1.5rem' className="fa-li"/>Lorem ipsum dolor sit amet consectetur adipisicing ept. Deleniti itaque, laborum corporis perferendis aperiam labore obcaecati unde consectet</p>
                                <p><FaCheckCircle color='green' size='1.5rem' className="fa-li"/>Lorem ipsum dolor sit amet consectetur adipisicing ept. Deleniti itaque, laborum corporis perferendis aperiam labore obcaecati unde consectet</p>
                                <p><FaCheckCircle color='green' size='1.5rem' className="fa-li"/>Lorem ipsum dolor sit amet consectetur adipisicing ept. Deleniti itaque, laborum corporis perferendis aperiam labore obcaecati unde consectet</p>
                            </div>

                            
         
                        </Col>
                    </Row>
                </Container>
                </div>
            <Footer />

        </div>
    )
}

export default Signup