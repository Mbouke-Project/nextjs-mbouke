import React, { useReducer, useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios'
import {Container, Nav, Navbar, Row, Col, Form, Button } from 'react-bootstrap'
import Image from 'next/image'
import styles from '../styles/Utils.module.sass'
import Navigation from '../components/navigation.js'

import Footer from '../components/footer.js'

function Login() {

    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e, email, password, router) => {
        e.preventDefault() 
        axios.post('http://127.0.0.1:4000/login', {user: {email: email, password: password}}, {withCredentials: true}) 
        .then( response => {
            console.log(response)
            if ( response.data.errors ) {
                setError(response.data.errors)
            }
            else {
                setError("")
                localStorage.setItem("token", response.data.jwt)
                router.push("/profile")
            }
        })
        .catch( error => {
            // console.log("HERE", error)
            // setError(error)
        })

    }


    return (
        <div>
            <Navigation />
            <div className={styles.content}>
                <Container>
                    <Row>
                        <Col xs={12} md={6}  className="d-none d-md-block text-center"  >
                        <Image
                            className={styles.landingImage}
                            src="/images/yard-worker.jpg"
                            alt="Picture a professional trimming plants with an electric trimmer"
                            layout='intrinsic'
                            width={530}
                            height={388}
                        />
                        </Col>
                        <Col className={styles.formColumn} xs={12} md={6} >
                       
                                <div className={styles.formContainer}>
                                <h1>Login For Pros</h1>
                                <span className={styles.errors}>{error}</span>
                                <Form onSubmit={ e => handleSubmit(e, email, password, router) }>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" onChange={ e => setEmail(e.target.value)}/>
                                        <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" onChange={ e => setPassword(e.target.value)}/>
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