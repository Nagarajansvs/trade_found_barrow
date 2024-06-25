import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {style} from './header.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import fav from '../images/favicon.png';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, BellFill, Envelope } from 'react-bootstrap-icons';
import { Card } from 'react-bootstrap';
import user from '../images/user.jpg';
import Badge from 'react-bootstrap/Badge';

function Header() {

    return (
        <>
        <div className="header_nav">
            <div className="">
                <div className='row'>
                    <div className='col-sm-12'>
                        <Navbar collapseOnSelect expand="lg" className="bg-white" bg="white">
                            <Container>
                                <Navbar.Brand href="/"><img src={logo}></img></Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto justify-content-end">
                                    <Nav.Link href="#features">Investor</Nav.Link>
                                    <Nav.Link href="#pricing">Borrower</Nav.Link>
                                    <Nav.Link href="#features">How it Works?</Nav.Link>
                                    <Nav.Link href="#pricing">Search</Nav.Link>
                                    <Nav.Link href="#features">Contact us</Nav.Link>
                                    
                                    {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                    </NavDropdown> */}

                                </Nav>
                                <Nav className="me-auto justify-content-end">
                                    <Nav.Link href="LoginPage" className="login-btn g-rounded-50">Login</Nav.Link>
                                    <Nav.Link eventKey={2} href="RegisterPage" className="login-btn g-rounded-50">Register</Nav.Link>
                                  
                                    <NavDropdown className="header-drop header-badge notification-section" title={<React.Fragment>
                                        <React.Fragment><BellFill color='var(--primary-colr)' size={20} /> <Badge bg='danger'>9</Badge></React.Fragment>
                                        </React.Fragment>} id="collapsible-nav-dropdown">
                                        <NavDropdown.Item href="">
                                        
                                            <div className="post-comment-des-profile">
                                        
                                                <div className="post-comment">
                                                    <div className="comment-main">
                                                        <div className="left">
                                                            <img src={user} className="img-fluid img-thumbnail" alt=""/>
                                                        </div>
                                                        <div className="right">
                                                            <p>A smooth glide through the air in one fluid motion sets this stunner of a catch apart.</p>
                                                            <span>5 Minutes ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-comment">
                                                    <div className="comment-main">
                                                        <div className="left">
                                                            <img src={user} className="img-fluid img-thumbnail" alt=""/>
                                                        </div>
                                                        <div className="right">
                                                            <p>A smooth glide through the air in one fluid motion sets this stunner of a catch apart.</p>
                                                            <span>5 Minutes ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-comment">
                                                    <div className="comment-main">
                                                        <div className="left">
                                                            <img src={user} className="img-fluid img-thumbnail" alt=""/>
                                                        </div>
                                                        <div className="right">
                                                            <p>A smooth glide through the air in one fluid motion sets this stunner of a catch apart.</p>
                                                            <span>5 Minutes ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-comment">
                                                    <div className="comment-main">
                                                        <div className="left">
                                                            <img src={user} className="img-fluid img-thumbnail" alt=""/>
                                                        </div>
                                                        <div className="right">
                                                            <p>A smooth glide through the air in one fluid motion sets this stunner of a catch apart.</p>
                                                            <span>5 Minutes ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-comment">
                                                    <div className="comment-main">
                                                        <div className="left">
                                                            <img src={user} className="img-fluid img-thumbnail" alt=""/>
                                                        </div>
                                                        <div className="right">
                                                            <p>A smooth glide through the air in one fluid motion sets this stunner of a catch apart.</p>
                                                            <span>5 Minutes ago</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown className="header-drop header-badge notification-section" title={<React.Fragment>
                                        <React.Fragment><Envelope color='var(--primary-colr)' size={20} /> <Badge bg='danger'>9</Badge></React.Fragment>
                                        </React.Fragment>} id="collapsible-nav-dropdown">
                                        <NavDropdown.Item href="#">

                                        <div className="post-comment-des-profile">
                                        
                                                <div className="post-comment">
                                                    <div className="comment-main">
                                                        <div className="left">
                                                            <img src={user} className="img-fluid img-thumbnail" alt=""/>
                                                        </div>
                                                        <div className="right">
                                                            <p>A smooth glide through the air in one fluid motion sets this stunner of a catch apart.</p>
                                                            <span>5 Minutes ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-comment">
                                                    <div className="comment-main">
                                                        <div className="left">
                                                            <img src={user} className="img-fluid img-thumbnail" alt=""/>
                                                        </div>
                                                        <div className="right">
                                                            <p>A smooth glide through the air in one fluid motion sets this stunner of a catch apart.</p>
                                                            <span>5 Minutes ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-comment">
                                                    <div className="comment-main">
                                                        <div className="left">
                                                            <img src={user} className="img-fluid img-thumbnail" alt=""/>
                                                        </div>
                                                        <div className="right">
                                                            <p>A smooth glide through the air in one fluid motion sets this stunner of a catch apart.</p>
                                                            <span>5 Minutes ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-comment">
                                                    <div className="comment-main">
                                                        <div className="left">
                                                            <img src={user} className="img-fluid img-thumbnail" alt=""/>
                                                        </div>
                                                        <div className="right">
                                                            <p>A smooth glide through the air in one fluid motion sets this stunner of a catch apart.</p>
                                                            <span>5 Minutes ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-comment">
                                                    <div className="comment-main">
                                                        <div className="left">
                                                            <img src={user} className="img-fluid img-thumbnail" alt=""/>
                                                        </div>
                                                        <div className="right">
                                                            <p>A smooth glide through the air in one fluid motion sets this stunner of a catch apart.</p>
                                                            <span>5 Minutes ago</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown className="header-drop" title={<React.Fragment>
                                        <div className="notification-circle"><img src={user} alt="" className="" /></div>
                                        </React.Fragment>} id="collapsible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Browse All</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Cities</NavDropdown.Item>
                                    </NavDropdown>

                 
                                </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            </div>
        </div></>
    );
}

export default Header;
