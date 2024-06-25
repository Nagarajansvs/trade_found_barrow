import React from 'react';
import Container from 'react-bootstrap/Container';
import {style} from './LoginScreen.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import barrow from '../images/barrow.jpg';
import logo from '../images/logo.png';
function LoginScreen() 
{
    return (
        <>
        <Container>
            <div className="sliderSection">
                <Row>
                    <Col sm={7}></Col>
                    <Col sm={5}>
                        <div className='login-card'>
                            <h2 className='title mt-3 mb-3'>Login</h2>
                            <Form className='login-section'>
                                <Row className="mb-3 mt-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="email" placeholder="Username" />
                                    </Form.Group>
                                </Row>
                                <Row className='mt-3 mb-3'>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Row>
                                <Row className='mt-3 mb-3 text-left'>
                                    <Form.Group as={Col} className="" id="formGridCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>
                                    <Form.Group as={Col} className="">
                                        <Nav.Item>
                                            <Nav.Link href="/ForgetPage">Forgot your password?</Nav.Link>
                                        </Nav.Item>
                                    </Form.Group>
                                </Row>
                                <Button className='login-btn g-rounded-50 mt-3 mb-3' type="submit">Login</Button>
                                <div className='login-bottom mt-3 mb-3'>
                                    <p>
                                        <span>Don't have an account?</span>
                                        <Nav.Item><Nav.Link href="/RegisterPage">Sign Up</Nav.Link></Nav.Item>
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

export default LoginScreen;
