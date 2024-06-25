import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {style} from './Details.scss';
import detail from '../images/detail.jpg';
import user from '../images/user.jpg';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaFilePdf } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import { Badge } from "react-bootstrap";


function Details() {
    return ( 
        <>
        <div className="product-page-section">
            <Container>
                <Row>
                    <Col>
                        <div className="title-heading">
                            <h2>Find Out More About Tradefund</h2>
                            <div class="heading-line"></div>
                            <p>A Import project in New York, United States</p>
                        </div>
                    </Col>
                </Row>
                
                <div className="details-view">
                    <Row className="justify-content-around">
                        <Col sm={5}>
                            <div className="detail-left-view">
                                <img src={detail} alt="" className="img-fluid"/>
                            </div>
                        </Col>
                        <Col sm={5}>
                            <div className="detail-right-view">
                                <div className="detail-heading">
                                    <h2>2<span>Lenders</span></h2>
                                    <div className="hour">0 <span>Hours to go</span></div>
                                </div>
                                <div className="price-details">
                                    <h3>$50,000.00</h3>
                                    <span>Lend of $50,000.00 goal</span>
                                    <p>A smooth glide through the air in one fluid motion sets this stunner of a catch apart. 
                                       The fielder lands on the turf and skids along, never releasing the precious ball.</p>
                                       <div className="rate-amount">Lend interest rate %</div>
                                    <hr/>
                                </div>
                                <div className="profile">
                                    <div className="left">
                                        <h2>Syed</h2>
                                        <p>8 Projects posted 2 Projects funded Following 8 project(s). 8 Projects posted 2 Projects funded Following 8 project(s).</p>
                                    </div>
                                    <div className="right">
                                        <img src={user} className="img-fluid img-thumbnail" alt=""/>
                                    </div>
                                </div>
                                <Button className="lend-btn">Lend</Button>

                                <div className="profile-tab">
                                    <Tabs defaultActiveKey="home" id="justify-tab-example" className="mb-3" justify>
                                        <Tab eventKey="home" title={<React.Fragment>Lenders <Badge className='success'>9</Badge></React.Fragment>}>
                                            <div className="abt-section">
                                                <h2>About Project</h2>
                                                <h3>Making short film for Social Cause.</h3>
                                                <p>Making short film for social cause.</p>
                                                <h3>Media and other files</h3>
                                                <h3><a href=""><FaFilePdf /> chat on 25th April.pdf</a></h3>
                                                <h3>Other Details</h3>
                                                <p>Form.Accept</p>
                                            </div>
                                            <div className="msg-section">
                                                <h3>Comments</h3>
                                                <div className="white-bg">
                                                    <p>0 Comments</p>
                                                </div>
                                                <h2>Post Comments</h2>
                                                <div className="post-bg">
                                                    <div className="main">
                                                        <div className="left">
                                                            <img src={user} className="img-fluid img-thumbnail" alt=""/>
                                                        </div>
                                                        <div className="right">
                                                            <Form>
                                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                    <Form.Select aria-label="Default select example">
                                                                    <option>Post To All</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                    </Form.Select>
                                                                </Form.Group>
                                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                                    <textarea className="form-control" name="postContent" rows={4} cols={40} />
                                                                </Form.Group>
                                                                <Button className="lend-btn btn btn-primary" type="submit">Post Comments</Button>
                                                            </Form>
                                                        </div>
                                                    </div>
                                                    <h2>Comments</h2>
                                                    <div className="post-comment-des">
                                                        <div className="post-comment">
                                                            <div className="comment-main">
                                                                <div className="left"><img src={user} className="img-fluid img-thumbnail" alt=""/></div>
                                                                <div className="right">
                                                                    <h2><a href="">P722686Y</a> - 3 years ago</h2>
                                                                    <p>[Private Message]</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="post-comment">
                                                            <div className="comment-main">
                                                                <div className="left"><img src={user} className="img-fluid img-thumbnail" alt=""/></div>
                                                                <div className="right">
                                                                    <h2><a href="">P722686Y</a> - 3 years ago</h2>
                                                                    <p>[Private Message]</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="profile" title={<React.Fragment>Lenders <Badge className='success'>9</Badge></React.Fragment>}>

                                            <div className="post-comment-des-profile">

                                                <div className="post-comment">
                                                    <div className="comment-main">
                                                        <div className="left">
                                                            <img src={user} className="img-fluid img-thumbnail" alt=""/>
                                                        </div>
                                                        <div className="right">
                                                            <h2><a href="">P722686Y</a> - 3 years ago</h2>
                                                            <p>[Private Message]</p>
                                                        </div>
                                                        <div className="rightt">
                                                            <Button className="lend-btn btn btn-primary" type="submit">$25,000.00</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-comment">
                                                    <div className="comment-main">
                                                        <div className="left">
                                                            <img src={user} className="img-fluid img-thumbnail" alt=""/>
                                                        </div>
                                                        <div className="right">
                                                            <h2><a href="">P722686Y</a> - 3 years ago</h2>
                                                            <p>[Private Message]</p>
                                                        </div>
                                                        <div className="rightt">
                                                            <Button className="lend-btn btn btn-primary" type="submit">$25,000.00</Button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </Tab>
                                        <Tab eventKey="longer-tab" title={<React.Fragment>Followers <Badge className='success'>9</Badge></React.Fragment>} >
                                            
                                            <div className="post-comment-des-profile">
                                                <div className="post-comment">
                                                    <div className="comment-main">
                                                        <div className="left">
                                                            <img src={user} className="img-fluid img-thumbnail" alt=""/>
                                                        </div>
                                                        <div className="right">
                                                            <h2>Admin</h2>
                                                        </div>
                                                        <div className="rightt">
                                                            <p>5 years ago</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="post-comment">
                                                    <div className="comment-main">
                                                        <div className="left">
                                                            <img src={user} className="img-fluid img-thumbnail" alt=""/>
                                                        </div>
                                                        <div className="right">
                                                            <h2>Admin</h2>
                                                        </div>
                                                        <div className="rightt">
                                                            <p>5 years ago</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </Tab>
                                    </Tabs>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </div>
        
            </Container>
        </div>
        </>
     );
}

export default Details;