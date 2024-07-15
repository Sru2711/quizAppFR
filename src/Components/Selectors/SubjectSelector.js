import { useSelector } from 'react-redux';
import biologyReducer from '../../store/Reducer';
import cardReducer from '../../store/Reducer';

export const useQuestionsAndAnswers = () => {
    const questionsAndAnswers = useSelector((state) =>{console.log("state.biologyReducer.filteredQuestionsAndAnswers", state.biologyReducer.filteredQuestionsAndAnswers); return state.biologyReducer.filteredQuestionsAndAnswers})
    return questionsAndAnswers;
}
    


export const useQuizResult =()=> {
    const quizResult = useSelector((state) => state.biologyReducer.answerCheck);
    return quizResult;
};

export const useGetAllSubjects = ()=>{
    const subjects= useSelector((state)=> state.cardReducer.subjectArray)
    return subjects;
};

