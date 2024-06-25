import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {style} from './Footer.scss';
import Nav from 'react-bootstrap/Nav';


function Footer() {
    return (
        <>
        <div class="footer">
            <div class="footer_section">
                
                <div class="container-fluid footer-bg">
                    <Container>
                        <Row>
                            <Col sm={8}>
                                <Row className="footer_left_section">
                                    <Col sm={6}>
                                        <h2>ABOUT</h2>
                                        <ul>
                                            <li>About us</li>
                                            <li>Our charter</li>
                                            <li>Stats</li>
                                            <li>Press</li>
                                            <li>Jobs</li>
                                        </ul>
                                    </Col>
                                    <Col sm={6}>
                                    <h2>SUPPORT</h2>
                                        <ul>
                                            <li>Help Center</li>
                                            <li>Our Rules</li>
                                            <li>Creator Resources</li>
                                            <li>Forward Funds</li>
                                            <li>Brand assets</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={4}>
                            <Row className="footer_right_section">
                                    <Col sm={12}>
                                        <h2>Socials</h2>
                                        <ul>
                                        <li><Facebook color='var(--black)' size={20}/></li>
                                        <li><Twitter color='var(--black)' size={20}/></li>
                                        <li><Instagram color='var(--black)' size={20}/></li>
                                        <li><Linkedin color='var(--black)' size={20}/></li>
                                        <li><Youtube color='var(--black)' size={20}/></li>
                                        </ul>
                                    </Col>
                                    
                                </Row>
                                
                            </Col>
                        </Row>
                        
                    </Container>
                </div>

                <div className="footer-bottom">
                    <Container>
                        <Row className="align-items-center">
                            <Col sm={3}>
                                <div className='copy-right'>
                                    <p>© Copyright 2024 - Tradefund</p>
                                </div>
                            </Col>
                            <Col sm={9}>
                                <Nav className="footer-bottom-link" activeKey="/home">
                                    <Nav.Item>
                                    <Nav.Link href="/home">Trust & Safety</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="link-1">Terms of Use</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="link-2">Privacy Policy</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="link-3">Cookie Policy</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="link-3">Cookie Preferences</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="link-3">Accessibility Statement</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="link-3">CA Notice of Consent</Nav.Link>
                                    </Nav.Item>                                    
                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        </div>
        </>
    );
}

export default Footer;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       