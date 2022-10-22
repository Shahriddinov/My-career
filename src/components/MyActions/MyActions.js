export const GetPersonalInformations = (data) => {
  return {
    type: "GET_PERSONAL_INFO",
    payload: data,
  };
};

export const GetAddress = (data) => {
  return {
    type: "GET_ADDRESS",
    payload: data,
  };
};

export const GetSkillsBackground = (data) => {
  return {
    type: "GET_SKILLS_BACKGROUND",
    payload: data,
  };
};

export const GetLanguage = (data) => {
  return {
    type: "GET_LANGUAGE",
    payload: data,
  };
};

export const GetExperience = (data) => {
  return {
    type: "GET_EXPERIENCE",
    payload: data,
  };
};

export const GetEducations = (data) => {
  return {
    type: "GET_EDUCATIONS",
    payload: data,
  };
};

export const GetContacts = (data) => {
  return {
    type: "GET_CONTACTS",
    payload: data,
  };
};