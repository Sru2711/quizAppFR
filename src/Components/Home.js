import React, { useState,useEffect} from 'react'
import { Row,CardGroup,Card, CardImg,CardBody,CardTitle,CardText,Button, AccordionHeader} from 'reactstrap';
import { Link,Routes, Route } from 'react-router-dom';
import "../Style/Home.scss";
import {getSubjectId as onGetSubjectId} from "../store/Images/action"
import { useGetAllSubjects as onUseGetAllSubjects } from './Selectors/SubjectSelector';
import { useDispatch } from 'react-redux';

const Home = () => {

  const subjects=onUseGetAllSubjects()
 const dispatch = useDispatch();

 const sendSubjectId =(subjectId)=> {
  console.log(subjectId)
  
 }

  return (

    <Row className="home-body">
      <Row className="headingRow">
        <div className="headingdiv">
        <h1 className="quizsubjects-heading">Master Every Subject Here</h1>
        </div>
      </Row>
      <CardGroup className="cardgroup">
        {subjects.map((subject) => {
          return (
            <Card className="mx-3 main-card" key={subject.id}>
              <CardImg
                src={subject.imgSrc} // Updated from url.imgsrc to subject.imgSrc
                alt="Card image cap"
                className="card-img"
              />
              <CardBody className="cardbody">
                <CardTitle className="card-title" tag="h5">
                  {subject.title}
                </CardTitle>
                <CardText className="card-text">
                  {subject.description}
                </CardText>
                <Button className="card-button" onClick={()=> {
                  sendSubjectId(subject.id)
                }}>
                  <Link to={`/subjectQuiz/${subject.id}`} className="button-link">
                    Start Quiz
                  </Link>
                </Button>
              </CardBody>
            </Card>
          );
        })}
      </CardGroup>
    </Row>
  )
}

export default Home