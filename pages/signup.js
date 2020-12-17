// import React, { useState } from 'react';
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
                        <Col xs={12} md={12} className={styles.signupContainer}>
                            <h2>Join Our Network Of Pros</h2>
                            <Form>
                                <Form.Group >
                                    <Form.Label>What Type Of Services Do You Provide?</Form.Label>
                                    <Form.Control type="text" placeholder="e.g. Plumbering, Roofing, etc" />
                                </Form.Group>
                                <Form.Row>
                                    <Col>
                                        <Form.Group contropd="formBasicEmail">
                                            <Form.Label>Country</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Country" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group >
                                            <Form.Label>City</Form.Label>
                                            <Form.Control type="text" placeholder="City" />
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Form.Group contropd="formBasicEmail">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="text" placeholder="First Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group >
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="text" placeholder="Last Name" />
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Form.Group >
                                            <Form.Label>Business Name</Form.Label>
                                            <Form.Control type="text" placeholder="Business Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group contropd="formBasicEmail">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="text" placeholder="Phone Number" />
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Form.Group contropd="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Email" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group >
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Button variant="success" type="submit">
                                    Get Started
                                </Button>
                            </Form>
                        </Col>
                        {/* <Col xs={12} md={7} className="d-none d-md-block "  >
                            <div className="text-center">
                                <h2>Why Join?</h2>
                            </div>
                            <div className='fa-ul' className="text-left">
                                <p><FaCheckCircle color='green' size='1.5rem' className="fa-li"/>Lorem ipsum dolor sit amet consectetur adipisicing ept. Deleniti itaque, laborum corporis perferendis aperiam labore obcaecati unde consectet</p>
                                <p><FaCheckCircle color='green' size='1.5rem' className="fa-li"/>Lorem ipsum dolor sit amet consectetur adipisicing ept. Deleniti itaque, laborum corporis perferendis aperiam labore obcaecati unde consectet</p>
                                <p><FaCheckCircle color='green' size='1.5rem' className="fa-li"/>Lorem ipsum dolor sit amet consectetur adipisicing ept. Deleniti itaque, laborum corporis perferendis aperiam labore obcaecati unde consectet</p>
                            </div>

                            
         
                        </Col> */}
                    </Row>
                </Container>
                </div>
            <Footer />

        </div>
    )
}

export default Signup