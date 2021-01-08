import React, { useReducer } from 'react';
import {Container, Nav, Navbar, Row, Col, Form, Button } from 'react-bootstrap'
import styles from '../styles/Utils.module.sass'
import Navigation from '../components/navigation.js'

import Footer from '../components/footer.js'
import { FaCheckCircle } from 'react-icons/fa'


const initialState = {
    service: '',
    country: '', 
    city: '', 
    firstName: '', 
    lastName: '', 
    businessName: '', 
    phoneNumber: '', 
    email: '', 
    password: ''
}

function reducer(state, action) {
    switch (action.type) {
        case 'setService': 
            return {
                ...state,
                service: action.value
            }
        case 'setCountry': 
            return {
                ...state, 
                country: action.value
            }
        case 'setCity': 
            return {
                ...state, 
                city: action.value
            }
        case 'setFirstName':
            return {
                ...state, 
                firstName: action.value
            } 
        case 'setLastName':
            return {
                ...state, 
                lastName: action.value
            } 
        case 'setBusinessName': 
            return {
                ...state, 
                businessName: action.value
            }
        case 'setPhoneNumber':
            return {
                ...state, 
                phoneNumber: action.value
            } 
        case 'setEmail':
            return {
                ...state, 
                email: action.value
            } 
        case 'setPassword':
            return {
                ...state, 
                password: action.value
            } 
    }
}


function Signup() {

    const [state, dispatch] = useReducer(reducer, initialState)
    
    const handleSubmit = (e, state) => {
        e.preventDefault()
      
    }
    
    return (
        <div>
            <Navigation />
            <div className={styles.content}>
                <Container>
                    <Row>
                        <Col xs={12} md={12} className={styles.signupContainer}>
                            <h2>Join Our Network Of Pros</h2>
                            <Form onSubmit={ e => handleSubmit(e, state)} >
                                <Form.Group >
                                    <Form.Label>What Type Of Services Do You Provide?</Form.Label>
                                    <Form.Control name="service" id='service' type="text" placeholder="e.g. Plumbering, Roofing, etc" onChange={ e => dispatch( {type: 'setService', value: e.target.value} ) } />
                                </Form.Group>
                                <Form.Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Country</Form.Label>
                                            <Form.Control name="country" type="text" placeholder="Enter Country" onChange={ e => dispatch( {type: 'setCountry', value: e.target.value} )}/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group >
                                            <Form.Label>City</Form.Label>
                                            <Form.Control name="city" type="text" placeholder="City" onChange={ e => dispatch( {type: 'setCity', value: e.target.value} )}/>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Form.Group >
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control name='firstName' type="text" placeholder="First Name" onChange={ e => dispatch( {type: 'setFirstName', value: e.target.value} )}/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group >
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control name='lastName' type="text" placeholder="Last Name" onChange={ e => dispatch( {type: 'setLastName', value: e.target.value} )}/>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Form.Group >
                                            <Form.Label>Business Name</Form.Label>
                                            <Form.Control name="businessName" type="text" placeholder="Business Name" onChange={ e => dispatch( {type: 'setBusinessName', value: e.target.value} )}/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group >
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control name="phoneNumber" type="text" placeholder="Phone Number" onChange={ e => dispatch( {type: 'setPhoneNumber', value: e.target.value} )}/>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Form.Group contropd="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control name="email" type="email" placeholder="Email" onChange={ e => dispatch( {type: 'setEmail', value: e.target.value} )}/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group >
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control name="password" type="password" placeholder="Password" onChange={ e => dispatch( {type: 'setPassword', value: e.target.value} )}/>
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