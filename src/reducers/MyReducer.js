const MyInitialState = {
  personalInformation: [],
  address: [],
  skillsBackground: [],
  language: [],
  experience: [],
  educations: [],
  contacts: [],
  rezume: [],
}

export const MyReducers = (state = MyInitialState, action) => {
  switch (action.type) {
    case "GET_PERSONAL_INFO": {
      return { ...state, personalInformation: action.payload };
    }
    case "GET_ADDRESS": {
      return { ...state, address: action.payload };
    }
    case "GET_SKILLS_BACKGROUND": {
      return { ...state, skillsBackground: action.payload };
    }
    case "GET_LANGUAGE": {
      return { ...state, language: action.payload };
    }
    case "GET_EXPERIENCE": {
      return { ...state, experience: action.payload };
    }
    case "GET_EDUCATIONS": {
      return { ...state, educations: action.payload };
    }
    case "GET_CONTACTS": {
      return { ...state, contacts: action.payload }
    }
    default: {
      return state;
    }
  }
};