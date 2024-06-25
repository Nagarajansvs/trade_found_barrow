import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {style} from './Start2.scss';
import Form from 'react-bootstrap/Form';
import FormWizard from "react-form-wizard-component";
import 'react-form-wizard-component/dist/style.css';
import { useState } from "react";

function Start() {

    return ( 
        <>
        <div className="start-page-section">
            <Container>
                <Row>
                    <Col>
                        <div className="title-heading">
                            <h2>START PROJECT</h2>
                            <div class="heading-line"></div>
                            <p>Discover new Tradefund campaigns or start your own campaign to raise funds.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="start-page">
            <Container>
                <Row>
                    <Col>
                        <div className="title-heading">
                            <h2>Check Eligibility</h2>
                            <div class="heading-line"></div>
                            <p>Before starting project, check your eligble interest rate based on your credit score and category.</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form className="start-form">
                        <Row className="mb-3">

                            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Needed Amount ($)</Form.Label>
                                <Form.Control type="email" placeholder="Enter the amount" />
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom01">
                                <Form.Label>Funding Required for</Form.Label>
                                <Form.Control type="email" placeholder="No.of days" />
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom01">
                            <Form.Label>Purpose</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Please select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom01">
                            <Form.Label></Form.Label>
                                <div className="slider-btn">
                                    <a href="Payment"><Button className="banner-btn">Check Eligibility</Button></a>
                                </div>
                            </Form.Group>
                        </Row>

                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>

        </>
     );
}

export default Start;