import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {style} from './Aboutus.scss';


function Aboutus() {
    return ( 
        <>
        <div className="home-about-section">
            <Container>
                <Row>
                    <Col>
                        <div className="title-heading">
                            <h2>Find Out More About Tradefund</h2>
                            <div class="heading-line"></div>
                        </div>
                        <div className="slider-btn">
                            <Button className="banner-btn">Invest More</Button>
                            <Button className="banner-btn">Borrow Now</Button>
                        </div> 
                    </Col>
                </Row>
            </Container>
        </div>
        </>
     );
}

export default Aboutus;



