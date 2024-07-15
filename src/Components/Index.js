import React from 'react'
import { Col, Row } from 'reactstrap'
import brain from "../Assets/brain.png"
import "../Style/Index.scss";
import IndexDetails from './IndexDetails';

const Index = () => {
  return (
    <Row className="body">
    <Row className="first-div">
      <Row className="second-div">
        <Row className="text-div">
          <Col className="text d-flex justify-content-between px-4" >
            <span className="pocket ">Pocket</span>
            <span className="intellect">Intellect</span>
          </Col>
        </Row>

        <Row className="third-div">
          <img src={brain} className="brain-img">
          </img>
          <IndexDetails className="indexDetails"/>
        </Row>
        
      </Row>

    </Row>
    </Row>
  )
}

export default Index