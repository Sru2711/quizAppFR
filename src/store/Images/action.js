import {
    GET_QUESTION_AND_ANSWERS_SUCCESS,
    GET_SAVED_QUESTION_AND_ANSWERS_SUCCESS,
    GET_SUBJECT_ID,
    GET_ON_SUBMIT_RESULT_SUCCESS
} from "./actionTypes";



export const getQuestionAndAnswersSuccess = ()=> ({
    type: GET_QUESTION_AND_ANSWERS_SUCCESS,
});
export const getSubjectId =(id) => ({
    type: GET_SUBJECT_ID,
    payload:id
})

export const getSavedQuestionAndAnswersSuccess = ( savedQuestions ) => {
    console.log("savedQuestions", savedQuestions);
    return {
        type: GET_SAVED_QUESTION_AND_ANSWERS_SUCCESS,
        payload: savedQuestions
    };
};
export const getResultOfQuiz = () => ({
    type: GET_ON_SUBMIT_RESULT_SUCCESS
})
