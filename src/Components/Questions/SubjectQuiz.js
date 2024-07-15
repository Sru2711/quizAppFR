import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'reactstrap';
import Timer from '../Timer';
import SweetAlert from '../SweetAlert';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSubjectId as onGetSubjectId} from '../../store/Images/action';
import { getQuestionAndAnswersSuccess as onGetQuestionAndAnswersSuccess, getSavedQuestionAndAnswersSuccess as onGetSavedQuestionAndAnswersSuccess, getResultOfQuiz as onGetResultOfQuiz } from '../../store/Images/action';
import { useQuestionsAndAnswers as onUseQuestionsAndAnswers, useQuizResult as onGetUseQuizResult,useGetChemQues as onUseGetChemQues } from '../Selectors/SubjectSelector';

const SubjectQuiz = () => {
  const dispatch = useDispatch();
  const  {id}  = useParams();
  
  useEffect(() => {
    console.log("idInURL",id)
    dispatch(onGetSubjectId(id));
  }, [dispatch, id]);
  
  useEffect(() => {
    dispatch(onGetQuestionAndAnswersSuccess());
  }, [dispatch]);

const getQNA=onUseQuestionsAndAnswers();
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0);
  const [questionObj, setQuestionObj] = useState(questions[index] || { a: '', options: {} });
  const [showAlertOnNext, setShowAlertOnNext] = useState(false);
  const [showAlertOnSubmit, setShowAlertOnSubmit] = useState(false);
  const [initSec, setInitSec] = useState(0);
  
 
  useEffect(() => {
    setQuestionObj(questions[index] || { a: '', options: {} });
  }, [index,questions]);

  useEffect(()=> {
    setQuestions(getQNA)
  },[getQNA])

  const showNextQuestion = () => {
   
    if (index < questions.length - 1) {

      setIndex(index + 1);
      setInitSec(!initSec);
    } else {
      setShowAlertOnNext(true);
    }
  };

  const sendSelectedValue = (key) => {
    if (index < questions.length) {
      setQuestionObj({ ...questionObj, userValue: key });
    }
    setTimeout(() => {
      showNextQuestion();
    }, 400);
  };

  useEffect(() => {
    dispatch(onGetSavedQuestionAndAnswersSuccess(questionObj));
    console.log(questionObj)
  }, [questionObj.userValue]);

  const handleSubmit = () => {
    setTimeout(() => {
      setShowAlertOnSubmit(true);
    }, 500);
    dispatch(onGetResultOfQuiz());
  };
  
  const quizResult = onGetUseQuizResult();
  return (
    <Row className="quiz">
      <Row className="quizContainer w-75 mx-auto">
        <div className="timer-Div">
          <Timer initSec={initSec} setInitSec={setInitSec} showNextQuestion={showNextQuestion}/>
        </div>
        <div className="questionsection ps-2" key={index}>
          <Col className="question">
            <div className="questioncoldiv-1 questioncoldiv q ps-2 ">{"Q)"} </div>
            <div className="questioncoldiv-2 questioncoldiv ps-2 q">{questionObj.question}</div>
          </Col>
          {Object.keys(questionObj.options).map((key) => (
            <Col
              key={key}
              className="questionsection-col questionsection-ques"
              style={questionObj.userValue === parseInt(key) ? { background: '#1a94f8', cursor: 'grab' } : { cursor: 'grab' }}
              onClick={() => sendSelectedValue(parseInt(key))}
            >
              <div className="questioncoldiv-1 questioncoldiv">{String.fromCharCode(64 + parseInt(key))} </div>
              <div className="questioncoldiv-2 questioncoldivp-2 ">{questionObj.options[key]}</div>
            </Col>
          ))}
        </div>
        <Row className="w-100 m-5 p-2 button">
          <Button className="submit-button" onClick={handleSubmit}>Submit</Button>
          {showAlertOnSubmit && (
            <SweetAlert
              show={true}
              title="Quiz Submitted"
              onConfirm={() => setShowAlertOnSubmit(false)}
              confirmButtonColor="#ffb300"
              textColor="black"
              buttonsStyling={true}
            >
              <Row className="resultRow">
                <div className="result">Unanswered: {quizResult.unanswered}</div>
                <div className="result">Correct Answers: {quizResult.correctAnswers}</div>
                <div className="result">Wrong Answers: {quizResult.wrongAnswers}</div>
              </Row>
            </SweetAlert>
          )}
          <Button className="next-button" onClick={showNextQuestion} disabled={index >= questions.length}>Next</Button>
        </Row>
        {showAlertOnNext && (
          <SweetAlert
            show={true}
            title="End of Quiz"
            text="Click on the submit button below!"
            confirmButtonColor="#ffb300"
            textColor="black"
            buttonsStyling={true}
            onConfirm={() => setShowAlertOnNext(false)}
          />
        )}
      </Row>
    </Row>
  );
};

export default SubjectQuiz;
