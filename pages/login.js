import {Container, Nav, Navbar, Row, Col, Form, Button } from 'react-bootstrap'
import Image from 'next/image'
import styles from '../styles/Utils.module.sass'
import Navigation from '../components/navigation.js'

import Footer from '../components/footer.js'

function Login() {
    return (
        <div>
            <Navigation />
            <div className={styles.content}>
                <Container>
                    <Row>
                        <Col xs={12} md={7} className="d-none d-md-block" >
                        <Image
                            className={styles.landingImage}
                            src="/images/yard-worker.jpg"
                            alt="Picture a professional trimming plants with an electric trimmer"
                            layout='responsive'
                            width={640}
                            height={469}
                        />
                        </Col>
                        <Col className={styles.formColumn} xs={12} md={5} >
                       
                                <div className={styles.formContainer}>
                                <h1>Login For Pros</h1>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
            <Footer />
        </div>
    )
}

export default Login