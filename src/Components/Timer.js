import React, { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';

const Timer = ({ initSec,showNextQuestion}) => {

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(initSec);
    const [pageLoaded, setPageLoaded] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        setPageLoaded(true);
    }, []);

    useEffect(() => {
        if (pageLoaded) {
            startTimer();
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [pageLoaded]);

    useEffect(() => {
        if (initSec !== seconds) {
            setSeconds(initSec);
            resetTimer();
        }
    }, [initSec]);

    const startTimer = () => {
        clearInterval(intervalId);
        const id = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds === 59) {
                    showNextQuestion()
                    return 0;
                } else {
                    return prevSeconds + 1;
                }
            });
        }, 1000);

        setIntervalId(id);
    };

    const resetTimer = () => {
        setMinutes(0);
    };

    return (
        <Row>
            <div className="col-12 col-md-6 col-lg-3 col-xl-2">
                <Row className="timer">
                    {
                        pageLoaded &&
                        <Col className="clock ps-3 mx-2">
                            {minutes}:{seconds < 10 ? "0" + seconds : seconds}
                        </Col>
                    }
                </Row>
            </div>
        </Row>
    );
};

export default Timer;
