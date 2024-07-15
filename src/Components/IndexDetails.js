import React from 'react';
import "../Style/IndexDetails.scss";
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import physics from "../Assets/physics.png"
import maths from "../Assets/maths.png"
import computer from "../Assets/computer.png"
import chemistry from "../Assets/chemistry.png";
import econommy from "../Assets/econommy.png";
import language from "../Assets/language.png";
import physicology from '../Assets/physicology.png';
import ratings from "../Assets/rating.gif";
import one from "../Assets/one.png";
import two from "../Assets/two.png";
import three from "../Assets/three.png";
const IndexDetails = () => {
  return (
    <Row>
      <Row className="firstsectionIndexDeTAIL">
        <Col className="firstdivcols titlecolsindexDetails  mb-2">
          <h5>Challenge your mind, test your knowledge, and conquer every quiz. Experience the thrill of learning with our engaging Pocket Intellect</h5>
        </Col>
        <Col className="firstdivcols mt-2 mb-2">

          <ul className="ul">
            <li className="list">
              <img src={physics} className="subjectimg mx-2">
              </img>
              <span className='subjectspan'>
                Physics</span>
            </li>
            <li className="list">
              <img src={maths} className="subjectimg mx-2">
              </img>
              <span className='subjectspan'>
                Mathematics</span></li>
            <li className="list">
              <img src={computer} className="subjectimg mx-2">
              </img>
              <span className="subjectspan">Computer
                Science</span></li>
            <li className="list">
              <img src={chemistry} className="subjectimg mx-2">
              </img>
              <span className="subjectspan">Chemistry</span>
            </li>
            <li className="list">
              <img src={physicology} className="subjectimg mx-2">
              </img>
              <span className="subjectspan">Philosophy</span> </li>
            <li className="list">
              <img src={language} className="subjectimg mx-2">
              </img>
              <span className="subjectspan">Languages</span></li>
            <li className="list">
              <img src={econommy} className="subjectimg mx-2">
              </img>
              <span className="subjectspan">Economics</span></li>
          </ul>

        </Col>
        <Col className="firstdivcols titlecolsindexDetails mt-2 mb-2">
          <h4>Logical Thinking Challenges</h4>
          <p> Provide quizzes and puzzles that stimulate logical thinking and problem-solving skills, offering a fun way to develop cognitive abilities</p>
        </Col>
      </Row>
      <Row className="secondsectionIndexDeTAIL justify-content-center align-items-center">
        <Col className="seconddivcols ">
          <img src={ratings} className="ratings" />

        </Col>

        <Col className="seconddivcols">
          <ul className="tipstosolvequiz">
            <li className="numberlist">
              <img src={one} className="numberimg mx-2">
              </img>
              <span className='subjectspan quizsolve mx-3'>
                Read Carefully</span>
            </li>
            <li className="numberlist">
              <img src={two} className="numberimg mx-2">
              </img>
              <span className='subjectspan mx-3'>
                Analyze Options</span>
            </li>
            <li className="numberlist">
              <img src={three} className="numberimg mx-2 ">
              </img>
              <span className='subjectspan mx-3 text-align-center'>
                Choose Wisely</span>
            </li>
          </ul>
        </Col>
        <Col className="seconddivcols">
          <h5 className="quote">Smile, Think, Chuckle, Score, Win!</h5>
        </Col>
        <Col className="seconddivcols ">
          <div className='buttoncol'>
            <Link to='/home'>
            <Button size='sm' className='button' to="/home"><span className="textonbutton">Let's Start</span></Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Row>
  )
}

export default IndexDetails