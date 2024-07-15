import {
    GET_ALL_SUBJECTS_SUCCESS
} from "./actionType"
import biology from "../../Assets/CardImgs/biology.jpg";
import chemistry from "../../Assets/CardImgs/chemistry.jpg";
import physics from "../../Assets/CardImgs/physics.jpg";
import maths from "../../Assets/CardImgs/math.jpg";
import economy from "../../Assets/CardImgs/economy.jpg";
import history from "../../Assets/CardImgs/history.jpg";
import geography from "../../Assets/CardImgs/geography.jpg";
import languages from "../../Assets/CardImgs/languages.jpg";
import physcology from "../../Assets/CardImgs/phsycology.jpg";

const initialState ={
  subjectArray: [
    {
      id: 1,
      title: "Biology",
      description: "The study of living organisms and their interactions with the environment.",
      imgSrc: biology
    },
    {
      id: 2,
      title: "History",
      description: "The exploration and analysis of past events, societies, and human achievements.",
      imgSrc: history
    },
    {
      id: 3,
      title: "Chemistry",
      description: "The investigation of matter, its properties, composition, and the changes it undergoes.",
      imgSrc: chemistry
    },
    {
      id: 4,
      title: "Geography",
      description: "The study of the Earth's landscapes, environments, and the relationships between people and their environments.",
      imgSrc: geography
    },
    {
      id: 5,
      title: "Economy",
      description: "The examination of production, distribution, and consumption of goods and services.",
      imgSrc: economy
    },
    {
      id: 6,
      title: "Literature",
      description: "The analysis and appreciation of written works, including fiction, poetry, and drama.",
      imgSrc: languages
    },
    {
      id: 7,
      title: "Psychology",
      description: "The study of behavior and mind, including conscious and unconscious phenomena, as well as feeling and thought.",
      imgSrc: physcology
    },
    {
      id: 8,
      title: "Physics",
      description: "The exploration of matter, energy, space, and time, and the interactions between them.",
      imgSrc: physics
    },
    {
      id: 9,
      title: "Mathematics",
      description: "The investigation of quantity, structure, space, change, and the relationships between them.",
      imgSrc: maths
    }
  ]
}

 const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SUBJECTS_SUCCESS:{
            return{
                ...state,
                subjectArray:action.payload
            }
        }
        default:
            return state;
    }
    
}

export default cardReducer