import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {style} from './Payment.scss';
import Form from 'react-bootstrap/Form';
import FormWizard from "react-form-wizard-component";
import 'react-form-wizard-component/dist/style.css';
import { useState } from "react";
import walleticon from '../images/wallet-icon.png';

function Payment() {


    const firstComponent = () => {
        return <div>
            <div className="first-section">
                <Row>
                    <Col md={12}>
                        <div className="title"><h2>Project Info</h2></div>
                    </Col>
                </Row>

                <div className="first-form">
                    <Row>
                        <Col md={12}>
                            <Form className="start-form">
                                
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="email" placeholder="Enter the amount" />
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label>Purpose</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Please select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>File Name</Form.Label>
                                        <Form.Control type="email" placeholder="Enter the amount" />
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label>Upload Image</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="8" controlId="validationCustom01">
                                        <Form.Label>Project Title</Form.Label>
                                        <textarea className="form-control" name="postContent" rows={2} cols={40}/>
                                    </Form.Group>
                                    
                                    {/* <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label></Form.Label>
                                        <div className="slider-btn">
                                            <a href="ProductPage"><Button className="banner-btn">Check Eligibility</Button></a>
                                        </div>
                                    </Form.Group> */}
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="title"><h2>Lending</h2></div>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Needed amount ($)</Form.Label>
                                        <Form.Control type="email" placeholder="Enter the amount" />
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label>Payment Method</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Please select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="3" controlId="validationCustom01">
                                    <Form.Label>Project Date</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Please select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="validationCustom01">
                                    <Form.Label>Project Month</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Please select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="validationCustom01">
                                    <Form.Label>Project Year</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Please select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
      }
      const secondComponent = () => {
        return <div>

            <div className="second-section">
                <Row>
                    <Col md={12}>
                        <div className="title"><h2>Description</h2></div>
                    </Col>
                </Row>

                <div className="second-form">
                    <Row>
                        <Col md={12}>
                            <Form className="start-form">
                                
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="8" controlId="validationCustom01">
                                        <Form.Label>Editer</Form.Label>
                                        <textarea className="form-control" name="postContent" rows={2} cols={40}/>
                                    </Form.Group>                                   
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                        <Form.Label>From</Form.Label>
                                        <textarea className="form-control" name="postContent" rows={2} cols={40}/>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                        <Form.Label>To</Form.Label>
                                        <textarea className="form-control" name="postContent" rows={2} cols={40}/>
                                    </Form.Group>                                    
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Incoterms</Form.Label>
                                        <Form.Control type="email" placeholder="Enter the amount" />
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label>Supported by</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Please select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Other</Form.Label>
                                        <Form.Control type="email" placeholder="Enter the amount" />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="title"><h2>Supported Documents</h2></div>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label>Upload Image</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="email" placeholder="Enter the amount" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label>Upload Image</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="email" placeholder="Enter the amount" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label>Upload Image</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="email" placeholder="Enter the amount" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label>Upload Image</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="email" placeholder="Enter the amount" />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="title"><h2>Video URL</h2></div>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="8" controlId="validationCustom01">
                                        <Form.Label>Video URL</Form.Label>
                                        <Form.Control type="email" placeholder="Enter the amount" />
                                    </Form.Group>                                    
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="title"><h2>Disclaimer</h2></div>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Group className="mb-3">
                                    <Form.Check required label="Accept"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"/>
                                    </Form.Group>
                                    </Form.Group>                                    
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>

        </div>
      }
      const thirdComponent = () => {
        return <div>

            <div className="third-section">
                <Row>
                    <Col md={12}>
                        <div className="title"><h2>Payment Type</h2></div>
                    </Col>
                </Row>

                <div className="third-form">
                    <Row>
                        <Col md={12}>
                            <Form className="start-form">
                                
                                <div className="gas-fees">Listing Fee $10.00</div>

                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                        <div className="pay">
                                            <div className="one">
                                                {['radio'].map((type) => (
                                                <div key={`inline-${type}`} className="">
                                                    <Form.Check inline name="group1" type={type} id={`inline-${type}-1`} />
                                                </div>))}
                                            </div>
                                            <div className="two">
                                                <img src={walleticon} alt="" className="" />
                                            </div>
                                        </div>
                                    </Form.Group>
                                </Row>

                                <Row>
                                    <Col>
                                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                                            <div className="slider-btn">
                                                <p>Your available balance: $7,420.00</p>
                                                <a href=""><Button className="banner-btn">Pay With Wallet</Button></a>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                </Row>

                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>

        </div>
      }
      const finalComponent = () => {
        return <div>Final Component</div>
      }


      const [steps, setSteps] = useState([
        { key: 'firstStep', label: 'Basic', isDone: true, component: firstComponent },
        { key: 'secondStep', label: 'Details', isDone: false, component: secondComponent },
        { key: 'thirdStep', label: 'Payment', isDone: false, component: thirdComponent },
        { key: 'finalStep', label: 'Confirmation', isDone: false, component: finalComponent },
      ]);
    
      const [activeStep, setActiveStep] = useState(steps[0]);
    
      const handleNext = () => {
        if (steps[steps.length - 1].key === activeStep.key) {
          alert('You have completed all steps.');
          return;
        }
    
        const index = steps.findIndex(x => x.key === activeStep.key);
        setSteps(prevStep => prevStep.map(x => {
          if (x.key === activeStep.key) x.isDone = true;
          return x;
        }))
        setActiveStep(steps[index + 1]);
      }
    
      const handleBack = () => {
        const index = steps.findIndex(x => x.key === activeStep.key);
        if (index === 0) return;
    
        setSteps(prevStep => prevStep.map(x => {
          if (x.key === activeStep.key) x.isDone = false;
          return x;
        }))
        setActiveStep(steps[index - 1]);
      }


    return ( 
        <>
        <div className="start-page-section">
            <Container>
                <Row>
                    <Col>
                        <div className="title-heading">
                            <h2>Project Description</h2>
                            <div class="heading-line"></div>
                            <p>Discover new Tradefund campaigns or start your own campaign to raise funds.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

       
        <div className="wizard-payment">
            <Container>
                <Row>
                    <Col md={{ span: 9, offset: 2 }}>
     
                        <div className="box">
                            <div className="steps">
                            <ul className="nav">
                                {steps.map((step, i) => {
                                return <li key={i} className={`${activeStep.key === step.key ? 'active' : ''} ${step.isDone ? 'done' : ''}`}>
                                    <div>Step {i + 1}<br /><span>{step.label}</span></div>
                                </li>
                                })}
                            </ul>
                            </div>
                            <div className="step-component">
                            {activeStep.component()}
                            </div>

                            <Row>
                                <Col md={12}>
                                    <div className="btn-component slider-btn">
                                        <input type="button" className="banner-btn2" value="Back" onClick={handleBack} disabled={steps[0].key === activeStep.key} />
                                        <input type="button" className="banner-btn" value={steps[steps.length - 1].key !== activeStep.key ? 'Next' : 'Submit'} onClick={handleNext} />
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

export default Payment;