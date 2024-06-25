import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {style} from './Counter.scss';
import CountUp from 'react-countup';


function Counter() {
    return ( 
        <>
        <div className="home-counter-section">
            <Container>
                <Row>
                    <Col>
                        <div className="title-heading">
                            <h2>Tradefund in Numbers</h2>
                            <div class="heading-line"></div>
                        </div> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="user-count">
                        <Row>
                            <Col>
                                <div className="card">
                                    <span><CountUp end={100} duration={3}></CountUp></span>
                                    <h2>USERS</h2>
                                </div>
                            </Col>
                            <Col>
                                <div className="card">
                                    <span><CountUp end={100} duration={5}></CountUp></span>
                                    <h2>TOP PROJECTS</h2>
                                </div>
                            </Col>
                            <Col>
                                <div className="card">
                                    <span><CountUp end={100} duration={7}></CountUp></span>
                                    <h2>ALMOST LEND</h2>
                                </div>
                            </Col>
                            <Col>
                                <div className="card">
                                    <span><CountUp end={100} duration={9}></CountUp></span>
                                    <h2>SUCCESSFUL PROJECTS</h2>
                                </div>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
     );
}

export default Counter;