import React from "react";
import { Container,Row,Col, Button } from "react-bootstrap";
import {style} from './SuccessProject.scss';
import card from '../images/card.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, BellFill, Envelope } from 'react-bootstrap-icons';
import { IoLocation } from "react-icons/io5";
import user from '../images/user.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';
import project from '../images/your-project.png';

function SuccessProject() {
    return ( 
        <>
        <div className="home-success-section">
            <Container>
                <Row>
                    <Col>
                        <div className="title-heading">
                            <h2>Top Projects</h2>
                            <div class="heading-line"></div>
                        </div> 
                    </Col>
                </Row>
                {/* <Row>
                    <Col sm={3}>
                        <div class="more-card">
                            <div className="relative-card">
                                <a href="/"><div class="position-relative"><img alt="media_logo" width="300" height="300" src={card} /></div></a>
                                <span class="nft-type-badge-rank"><span class="rank-title green">Completed</span></span>
                            </div>
                            <div class="top-content-title">
                                <div class="more-nft-info-header">
                                    <div class="more-nft-title">
                                        <div class="more-nft-title-box">
                                            <div class="more-nft-ownername-info">
                                                <div class="more-nft-desc">01 JUN 2024</div>
                                                <span class="more-nft-name">Shortfilm making</span>
                                                <div class="more-nft-desc2">Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row> */}


                <Row>
                    <Col>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                            }}
                            modules={[Autoplay]} className="mySwiper">
                            <SwiperSlide>
                                <div class="more-card">
                                    <div className="relative-card">
                                        <a href="/">
                                            <div class="position-relative">
                                                <img alt="media_logo" width="100%" height="200" src={card} />
                                            </div>
                                        </a>
                                    </div>
                                    <div class="top-content-title">
                                        <div class="more-nft-info-header">
                                            <div class="more-nft-title">
                                                <div class="more-nft-title-box">
                                                    <div class="more-nft-ownername-info">
                                                        <div class="more-nft-desc">IMPORT</div>
                                                        <span class="more-nft-name">Renovate Office</span>
                                                        <div class="more-nft-para">by <b>Syed</b></div>
                                                        <div class="more-nft-desc2">Filler text is text that shares some characteristics of a real written text.</div>
                                                        <div class="more-nft-location"><IoLocation /> New York , United States</div>
                                                        <div className="profile-status">
                                                            <div className="one">
                                                                <ProgressBar variant="orange" now={40} />
                                                            </div>
                                                            <div className="two">
                                                                <div className="fund-details">
                                                                    <span>100%</span>
                                                                    <p>Funded</p>
                                                                </div>
                                                                <div className="fund-details">
                                                                    <span>$ 5,000.00</span>
                                                                    <p>pledged</p>
                                                                </div>
                                                                <div className="fund-details">
                                                                    <span>Apr 30</span>
                                                                    <p>lent on</p>
                                                                </div>
                                                            </div>
                                                            <div className="three">
                                                                <div className="left">
                                                                    <div class="panel-hover">
                                                                        <div class="panel-data">
                                                                            <div class="panel-cell">
                                                                                <div class="text-center">
                                                                                    <div class="col-xs-12">
                                                                                        <div className="slider-btn">
                                                                                            <Button className="banner-btn" disabled>FOLLOW</Button>
                                                                                            <Button className="banner-btn">LEND</Button>
                                                                                        </div>  
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="right">
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="more-card">
                                    <div className="relative-card">
                                        <a href="/">
                                            <div class="position-relative">
                                                <img alt="media_logo" width="100%" height="200" src={card} />
                                            </div>
                                        </a>
                                    </div>
                                    <div class="top-content-title">
                                        <div class="more-nft-info-header">
                                            <div class="more-nft-title">
                                                <div class="more-nft-title-box">
                                                    <div class="more-nft-ownername-info">
                                                        <div class="more-nft-desc">IMPORT</div>
                                                        <span class="more-nft-name">Renovate Office</span>
                                                        <div class="more-nft-para">by <b>Syed</b></div>
                                                        <div class="more-nft-desc2">Filler text is text that shares some characteristics of a real written text.</div>
                                                        <div class="more-nft-location"><IoLocation /> New York , United States</div>
                                                        <div className="profile-status">
                                                            <div className="one">
                                                                <ProgressBar variant="orange" now={40} />
                                                            </div>
                                                            <div className="two">
                                                                <div className="fund-details">
                                                                    <span>100%</span>
                                                                    <p>Funded</p>
                                                                </div>
                                                                <div className="fund-details">
                                                                    <span>$ 5,000.00</span>
                                                                    <p>pledged</p>
                                                                </div>
                                                                <div className="fund-details">
                                                                    <span>Apr 30</span>
                                                                    <p>lent on</p>
                                                                </div>
                                                            </div>
                                                            <div className="three">
                                                                <div className="left">
                                                                    <div class="panel-hover">
                                                                        <div class="panel-data">
                                                                            <div class="panel-cell">
                                                                                <div class="text-center">
                                                                                    <div class="col-xs-12">
                                                                                        <div className="slider-btn">
                                                                                            <Button className="banner-btn" disabled>FOLLOW</Button>
                                                                                            <Button className="banner-btn">LEND</Button>
                                                                                        </div>  
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="right">
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                            {/* Demo Projects */}
                            <SwiperSlide>
                                <div class="more-card demo-project">
                                    <div className="main">
                                        <img src={project} alt="" className=""/>
                                        <h2>Start Projects</h2>
                                        <div className="slider-btn">
                                            <a href="ProductPage"><Button className="banner-btn">Start Projects</Button></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>


                
            </Container>
        </div>

        <div className="home-ongoing-section">
            <Container>
                <Row>
                    <Col>
                        <div className="title-heading">
                            <h2>Ending Soon</h2>
                            <div class="heading-line"></div>
                        </div> 
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                            }}
                            modules={[Autoplay]} className="mySwiper">
                            <SwiperSlide>
                                <div class="more-card">
                                    <div className="relative-card">
                                        <a href="/">
                                            <div class="position-relative">
                                                <img alt="media_logo" width="100%" height="200" src={card} />
                                            </div>
                                        </a>
                                    </div>
                                    <div class="top-content-title">
                                        <div class="more-nft-info-header">
                                            <div class="more-nft-title">
                                                <div class="more-nft-title-box">
                                                    <div class="more-nft-ownername-info">
                                                        <div class="more-nft-desc">IMPORT</div>
                                                        <span class="more-nft-name">Renovate Office</span>
                                                        <div class="more-nft-para">by <b>Syed</b></div>
                                                        <div class="more-nft-desc2">Filler text is text that shares some characteristics of a real written text.</div>
                                                        <div class="more-nft-location"><IoLocation /> New York , United States</div>
                                                        <div className="profile-status">
                                                            <div className="one">
                                                                <ProgressBar variant="orange" now={40} />
                                                            </div>
                                                            <div className="two">
                                                                <div className="fund-details">
                                                                    <span>100%</span>
                                                                    <p>Funded</p>
                                                                </div>
                                                                <div className="fund-details">
                                                                    <span>$ 5,000.00</span>
                                                                    <p>pledged</p>
                                                                </div>
                                                                <div className="fund-details">
                                                                    <span>Apr 30</span>
                                                                    <p>lent on</p>
                                                                </div>
                                                            </div>
                                                            <div className="three">
                                                                <div className="left">
                                                                    <div class="panel-hover">
                                                                        <div class="panel-data">
                                                                            <div class="panel-cell">
                                                                                <div class="text-center">
                                                                                    <div class="col-xs-12">
                                                                                        <div className="slider-btn">
                                                                                            <Button className="banner-btn" disabled>FOLLOW</Button>
                                                                                            <Button className="banner-btn">LEND</Button>
                                                                                        </div>  
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="right">
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="more-card">
                                    <div className="relative-card">
                                        <a href="/">
                                            <div class="position-relative">
                                                <img alt="media_logo" width="100%" height="200" src={card} />
                                            </div>
                                        </a>
                                    </div>
                                    <div class="top-content-title">
                                        <div class="more-nft-info-header">
                                            <div class="more-nft-title">
                                                <div class="more-nft-title-box">
                                                    <div class="more-nft-ownername-info">
                                                        <div class="more-nft-desc">IMPORT</div>
                                                        <span class="more-nft-name">Renovate Office</span>
                                                        <div class="more-nft-para">by <b>Syed</b></div>
                                                        <div class="more-nft-desc2">Filler text is text that shares some characteristics of a real written text.</div>
                                                        <div class="more-nft-location"><IoLocation /> New York , United States</div>
                                                        <div className="profile-status">
                                                            <div className="one">
                                                                <ProgressBar variant="orange" now={40} />
                                                            </div>
                                                            <div className="two">
                                                                <div className="fund-details">
                                                                    <span>100%</span>
                                                                    <p>Funded</p>
                                                                </div>
                                                                <div className="fund-details">
                                                                    <span>$ 5,000.00</span>
                                                                    <p>pledged</p>
                                                                </div>
                                                                <div className="fund-details">
                                                                    <span>Apr 30</span>
                                                                    <p>lent on</p>
                                                                </div>
                                                            </div>
                                                            <div className="three">
                                                                <div className="left">
                                                                    <div class="panel-hover">
                                                                        <div class="panel-data">
                                                                            <div class="panel-cell">
                                                                                <div class="text-center">
                                                                                    <div class="col-xs-12">
                                                                                        <div className="slider-btn">
                                                                                            <Button className="banner-btn" disabled>FOLLOW</Button>
                                                                                            <Button className="banner-btn">LEND</Button>
                                                                                        </div>  
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="right">
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                            {/* Demo Projects */}
                            <SwiperSlide>
                                <div class="more-card demo-project">
                                    <div className="main">
                                        <img src={project} alt="" className=""/>
                                        <h2>Start Projects</h2>
                                        <div className="slider-btn">
                                            <a href="ProductPage"><Button className="banner-btn">Start Projects</Button></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
        

        <div className="home-ongoing-section">
            <Container>
                <Row>
                    <Col>
                        <div className="title-heading">
                            <h2>Almost Lent</h2>
                            <div class="heading-line"></div>
                        </div> 
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                            }}
                            modules={[Autoplay]} className="mySwiper">
                            <SwiperSlide>
                                <div class="more-card">
                                    <div className="relative-card">
                                        <a href="/">
                                            <div class="position-relative">
                                                <img alt="media_logo" width="100%" height="200" src={card} />
                                            </div>
                                        </a>
                                    </div>
                                    <div class="top-content-title">
                                        <div class="more-nft-info-header">
                                            <div class="more-nft-title">
                                                <div class="more-nft-title-box">
                                                    <div class="more-nft-ownername-info">
                                                        <div class="more-nft-desc">IMPORT</div>
                                                        <span class="more-nft-name">Renovate Office</span>
                                                        <div class="more-nft-para">by <b>Syed</b></div>
                                                        <div class="more-nft-desc2">Filler text is text that shares some characteristics of a real written text.</div>
                                                        <div class="more-nft-location"><IoLocation /> New York , United States</div>
                                                        <div className="profile-status">
                                                            <div className="one">
                                                                <ProgressBar variant="orange" now={40} />
                                                            </div>
                                                            <div className="two">
                                                                <div className="fund-details">
                                                                    <span>100%</span>
                                                                    <p>Funded</p>
                                                                </div>
                                                                <div className="fund-details">
                                                                    <span>$ 5,000.00</span>
                                                                    <p>pledged</p>
                                                                </div>
                                                                <div className="fund-details">
                                                                    <span>Apr 30</span>
                                                                    <p>lent on</p>
                                                                </div>
                                                            </div>
                                                            <div className="three">
                                                                <div className="left">
                                                                    <div class="panel-hover">
                                                                        <div class="panel-data">
                                                                            <div class="panel-cell">
                                                                                <div class="text-center">
                                                                                    <div class="col-xs-12">
                                                                                        <div className="slider-btn">
                                                                                            <Button className="banner-btn" disabled>FOLLOW</Button>
                                                                                            <Button className="banner-btn">LEND</Button>
                                                                                        </div>  
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="right">
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="more-card">
                                    <div className="relative-card">
                                        <a href="/">
                                            <div class="position-relative">
                                                <img alt="media_logo" width="100%" height="200" src={card} />
                                            </div>
                                        </a>
                                    </div>
                                    <div class="top-content-title">
                                        <div class="more-nft-info-header">
                                            <div class="more-nft-title">
                                                <div class="more-nft-title-box">
                                                    <div class="more-nft-ownername-info">
                                                        <div class="more-nft-desc">IMPORT</div>
                                                        <span class="more-nft-name">Renovate Office</span>
                                                        <div class="more-nft-para">by <b>Syed</b></div>
                                                        <div class="more-nft-desc2">Filler text is text that shares some characteristics of a real written text.</div>
                                                        <div class="more-nft-location"><IoLocation /> New York , United States</div>
                                                        <div className="profile-status">
                                                            <div className="one">
                                                                <ProgressBar variant="orange" now={40} />
                                                            </div>
                                                            <div className="two">
                                                                <div className="fund-details">
                                                                    <span>100%</span>
                                                                    <p>Funded</p>
                                                                </div>
                                                                <div className="fund-details">
                                                                    <span>$ 5,000.00</span>
                                                                    <p>pledged</p>
                                                                </div>
                                                                <div className="fund-details">
                                                                    <span>Apr 30</span>
                                                                    <p>lent on</p>
                                                                </div>
                                                            </div>
                                                            <div className="three">
                                                                <div className="left">
                                                                    <div class="panel-hover">
                                                                        <div class="panel-data">
                                                                            <div class="panel-cell">
                                                                                <div class="text-center">
                                                                                    <div class="col-xs-12">
                                                                                        <div className="slider-btn">
                                                                                            <Button className="banner-btn" disabled>FOLLOW</Button>
                                                                                            <Button className="banner-btn">LEND</Button>
                                                                                        </div>  
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="right">
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                            {/* Demo Projects */}
                            <SwiperSlide>
                                <div class="more-card demo-project">
                                    <div className="main">
                                        <img src={project} alt="" className=""/>
                                        <h2>Start Projects</h2>
                                        <div className="slider-btn">
                                            <a href="ProductPage"><Button className="banner-btn">Start Projects</Button></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>


        <div className="home-ongoing-section">
            <Container>
                <Row>
                    <Col>
                        <div className="title-heading">
                            <h2>Successful Projects</h2>
                            <div class="heading-line"></div>
                        </div> 
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                            }}
                            modules={[Autoplay]} className="mySwiper">
                            <SwiperSlide>
                                <div class="more-card">
                                    <div className="relative-card">
                                        <a href="/">
                                            <div class="position-relative">
                                                <img alt="media_logo" width="100%" height="200" src={card} />
                                            </div>
                                        </a>
                                    </div>
                                    <div class="top-content-title">
                                        <div class="more-nft-info-header">
                                            <div class="more-nft-title">
                                                <div class="more-nft-title-box">
                                                    <div class="more-nft-ownername-info">
                                                        <div class="more-nft-desc">IMPORT</div>
                                                        <span class="more-nft-name">Renovate Office</span>
                                                        <div class="more-nft-para">by <b>Syed</b></div>
                                                        <div class="more-nft-desc2">Filler text is text that shares some characteristics of a real written text.</div>
                                                        <div class="more-nft-location"><IoLocation /> New York , United States</div>
                                                        <div className="profile-status">
                                                            <div className="one">
                                                                <ProgressBar variant="orange" now={40} />
                                                            </div>
                                                            <div className="two">
                                                                <div className="fund-details">
                                                                    <span>100%</span>
                                                                    <p>Funded</p>
                                                                </div>
                                                                <div className="fund-details">
                                                                    <span>$ 5,000.00</span>
                                                                    <p>pledged</p>
                                                                </div>
                                                                <div className="fund-details">
                                                                    <span>Apr 30</span>
                                                                    <p>lent on</p>
                                                                </div>
                                                            </div>
                                                            <div className="three">
                                                                <div className="left">
                                                                    <div class="panel-hover">
                                                                        <div class="panel-data">
                                                                            <div class="panel-cell">
                                                                                <div class="text-center">
                                                                                    <div class="col-xs-12">
                                                                                        <div className="slider-btn">
                                                                                            <Button className="banner-btn" disabled>FOLLOW</Button>
                                                                                            <Button className="banner-btn">LEND</Button>
                                                                                        </div>  
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="right">
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="more-card">
                                    <div className="relative-card">
                                        <a href="/">
                                            <div class="position-relative">
                                                <img alt="media_logo" width="100%" height="200" src={card} />
                                            </div>
                                        </a>
                                    </div>
                                    <div class="top-content-title">
                                        <div class="more-nft-info-header">
                                            <div class="more-nft-title">
                                                <div class="more-nft-title-box">
                                                    <div class="more-nft-ownername-info">
                                                        <div class="more-nft-desc">IMPORT</div>
                                                        <span class="more-nft-name">Renovate Office</span>
                                                        <div class="more-nft-para">by <b>Syed</b></div>
                                                        <div class="more-nft-desc2">Filler text is text that shares some characteristics of a real written text.</div>
                                                        <div class="more-nft-location"><IoLocation /> New York , United States</div>
                                                        <div className="profile-status">
                                                            <div className="one">
                                                                <ProgressBar variant="orange" now={40} />
                                                            </div>
                                                            <div className="two">
                                                                <div className="fund-details">
                                                                    <span>100%</span>
                                                                    <p>Funded</p>
                                                                </div>
                                                                <div className="fund-details">
                                                                    <span>$ 5,000.00</span>
                                                                    <p>pledged</p>
                                                                </div>
                                                                <div className="fund-details">
                                                                    <span>Apr 30</span>
                                                                    <p>lent on</p>
                                                                </div>
                                                            </div>
                                                            <div className="three">
                                                                <div className="left">
                                                                    <div class="panel-hover">
                                                                        <div class="panel-data">
                                                                            <div class="panel-cell">
                                                                                <div class="text-center">
                                                                                    <div class="col-xs-12">
                                                                                        <div className="slider-btn">
                                                                                            <Button className="banner-btn" disabled>FOLLOW</Button>
                                                                                            <Button className="banner-btn">LEND</Button>
                                                                                        </div>  
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="right">
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="more-card">
                                    <div className="relative-card">
                                        <a href="/">
                                            <div class="position-relative">
                                                <img alt="media_logo" width="100%" height="200" src={card} />
                                            </div>
                                        </a>
                                    </div>
                                    <div class="top-content-title">
                                        <div class="more-nft-info-header">
                                            <div class="more-nft-title">
                                                <div class="more-nft-title-box">
                                                    <div class="more-nft-ownername-info">
                                                        <div class="more-nft-desc">IMPORT</div>
                                                        <span class="more-nft-name">Renovate Office</span>
                                                        <div class="more-nft-para">by <b>Syed</b></div>
                                                        <div class="more-nft-desc2">Filler text is text that shares some characteristics of a real written text.</div>
                                                        <div class="more-nft-location"><IoLocation /> New York , United States</div>
                                                        <div className="profile-status">
                                                            <div className="one">
                                                                <ProgressBar variant="orange" now={40} />
                                                            </div>
                                                            <div className="two">
                                                                <div className="fund-details">
                                                                    <span>100%</span>
                                                                    <p>Funded</p>
                                                                </div>
                                                                <div className="fund-details">
                                                                    <span>$ 5,000.00</span>
                                                                    <p>pledged</p>
                                                                </div>
                                                                <div className="fund-details">
                                                                    <span>Apr 30</span>
                                                                    <p>lent on</p>
                                                                </div>
                                                            </div>
                                                            <div className="three">
                                                                <div className="left">
                                                                    <div class="panel-hover">
                                                                        <div class="panel-data">
                                                                            <div class="panel-cell">
                                                                                <div class="text-center">
                                                                                    <div class="col-xs-12">
                                                                                        <div className="slider-btn">
                                                                                            <Button className="banner-btn" disabled>FOLLOW</Button>
                                                                                            <Button className="banner-btn">LEND</Button>
                                                                                        </div>  
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="right">
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="more-card">
                                    <div className="relative-card">
                                        <a href="/">
                                            <div class="position-relative">
                                                <img alt="media_logo" width="100%" height="200" src={card} />
                                            </div>
                                        </a>
                                    </div>
                                    <div class="top-content-title">
                                        <div class="more-nft-info-header">
                                            <div class="more-nft-title">
                                                <div class="more-nft-title-box">
                                                    <div class="more-nft-ownername-info">
                                                        <div class="more-nft-desc">IMPORT</div>
                                                        <span class="more-nft-name">Renovate Office</span>
                                                        <div class="more-nft-para">by <b>Syed</b></div>
                                                        <div class="more-nft-desc2">Filler text is text that shares some characteristics of a real written text.</div>
                                                        <div class="more-nft-location"><IoLocation /> New York , United States</div>
                                                        <div className="profile-status">
                                                            <div className="one">
                                                                <ProgressBar variant="orange" now={40} />
                                                            </div>
                                                            <div className="two">
                                                                <div className="fund-details">
                                                                    <span>100%</span>
                                                                    <p>Funded</p>
                                                                </div>
                                                                <div className="fund-details">
                                                                    <span>$ 5,000.00</span>
                                                                    <p>pledged</p>
                                                                </div>
                                                                <div className="fund-details">
                                                                    <span>Apr 30</span>
                                                                    <p>lent on</p>
                                                                </div>
                                                            </div>
                                                            <div className="three">
                                                                <div className="left">
                                                                    <div class="panel-hover">
                                                                        <div class="panel-data">
                                                                            <div class="panel-cell">
                                                                                <div class="text-center">
                                                                                    <div class="col-xs-12">
                                                                                        <div className="slider-btn">
                                                                                            <Button className="banner-btn" disabled>FOLLOW</Button>
                                                                                            <Button className="banner-btn">LEND</Button>
                                                                                        </div>  
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="right">
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                    <div className="notification-circle">
                                                                        <img src={user} alt="" className="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>

        
        </>
     );
}

export default SuccessProject;