import React from 'react';
import Container from 'react-bootstrap/Container';
import {style} from './Slider.scss';
import loginbanner from '../images/login-banner.jpg';
import Button from 'react-bootstrap/Button';

function Slider() 
{
    return (
        <>
        <div className="landing-page-section">
            <Container fluid className='p-0'>
                <div className="banner-section">
                    <div class="banner-item">
                        <div class="caption">
                            <h3>Lets Fund Trade</h3>
                            <p>Trade Fund - the hub for financing trade</p>
                        </div>  
                        <div className="slider-btn">
                            <Button className="banner-btn">Start Lending</Button>
                            <Button className="banner-btn">Start Borrowing</Button>
                        </div>    
                    </div>
                </div>
            </Container>
        </div>
        </>
    );
}

export default Slider;