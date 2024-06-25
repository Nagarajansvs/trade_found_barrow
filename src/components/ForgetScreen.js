import React from 'react';
import Container from 'react-bootstrap/Container';
import {style} from './ForgetScreen.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import barrow from '../images/barrow.jpg';
import logo from '../images/logo.png';
function ForgetScreen() 
{
    return (
        <>
        <Container>
            <div className="sliderSection">
                <Row>
                    <Col sm={7}></Col>
                    <Col sm={5}>
                        <div className='register-card'>
                            <h2 className='title mt-3 mb-3'>Forgot your password?</h2>
                            <Form className='login-section'>
                                <Row className="mb-3 mt-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                </Row>
                                <Row className='mt-3 mb-3'>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Control type="password" placeholder="Security Code" />
                                    </Form.Group>
                                </Row>
                                <Button className='login-btn g-rounded-50 mt-3 mb-3' type="submit">Send</Button>
                                <div className='login-bottom mt-3 mb-3'>
                                    <p>
                                        <span>Enter your Email, and we will send you instructions for resetting your password.</span>
                                    </p>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
        </>
    );
}

export default ForgetScreen;
