import React from 'react';
import Container from 'react-bootstrap/Container';
import {style} from './RegisterScreen.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import barrow from '../images/barrow.jpg';
import logo from '../images/logo.png';
function RegisterScreen() 
{
    return (
        <>
        <Container>
            <div className="sliderSection">
                <Row>
                    <Col sm={7}></Col>
                    <Col sm={5}>
                        <div className='login-card'>
                            <h2 className='title mt-3 mb-3'>Register</h2>
                            <Form className='login-section'>
                                <Row className="mb-3 mt-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="email" placeholder="Username" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3 mt-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                </Row>
                                <Row className='mt-3 mb-3'>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Row>
                                <Row className='mt-3 mb-3'>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Control type="password" placeholder="Confirm Password" />
                                    </Form.Group>
                                </Row>
                                <Row className='mt-3 mb-3 text-left'>
                                    <Form.Group as={Col} className="condition-section" id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="" />I have read, understood & agree to the 
                                        <Nav.Item><Nav.Link href="/RegisterPage">Terms & Conditions</Nav.Link></Nav.Item>
                                    </Form.Group>
                                </Row>
                                <Button className='login-btn g-rounded-50 mt-3 mb-3' type="submit">Register</Button>
                                <div className='login-bottom mt-3 mb-3'>
                                    <p>
                                        <span>Already have a Tradefund ID?</span>
                                        <Nav.Item><Nav.Link href="/LoginPage">Sign In</Nav.Link></Nav.Item>
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

export default RegisterScreen;
