import axios from "axios";

export const BaseUrl = "http://localhost:5000/";

// about Company URL
const REGISTER_URL = `${BaseUrl}register`;
const LOGIN_URL = `${BaseUrl}login`;
const COMPANY_USER = `${BaseUrl}api/Company/User/Create`;
const COMPANY = `${BaseUrl}api/Company/Create`;
const COMPANY_LOC = `${BaseUrl}api/Company/Location/Create`;
const COMPANY_CONTACT = `${BaseUrl}api/Company/Contact/Create`;

// about freelancer URL

// const FRL_USER = `${BaseUrl}api/Freelancer`  BULAR CompleteForm ICHIDA AXIOSDAYOZILGAN
// const FRL_ADDRESS = `${BaseUrl}api/Freelancer/Adress`  BULAR CompleteForm ICHIDA AXIOSDAYOZILGAN
const FRL_POSITION = `${BaseUrl}api/Freelancer/Position`;
const FRL_LANGUAGE = `${BaseUrl}api/FreelancerLanguage`;
const FRL_EXPERINCE = `${BaseUrl}api/FreelancerExperience`;
const FRL_EDUCATION = `${BaseUrl}api/FreelancerEducation`;

// about Company post URL
const COMPANY_POST_TITLE = `${BaseUrl}api/Job/title`;
const COMPANY_POST_DESC = `${BaseUrl}api/Job/description`;
const COMPANY_POST_TALANT = `${BaseUrl}api/Job/talant`;
const COMPANY_POST_CONTRACT = `${BaseUrl}api/Job/contract`;
const COMPANY_JOB_SAVE = `${BaseUrl}api/Job/save`;

export const token = JSON.parse(localStorage.getItem("token"));
const headersForm = {
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  },
};

const headersJson = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const POST = {
  //   AS COMPANY
  login: (LoginParams) => axios.post(LOGIN_URL, LoginParams, headersJson),
  register: (params) => axios.post(REGISTER_URL, params, headersJson),
  companyUser: (CompanyUserParams) =>
    axios.post(COMPANY_USER, CompanyUserParams, headersJson),
  company: (CompanyParams) => axios.post(COMPANY, CompanyParams, headersJson),
  companyLoc: (CompanyLocParams) =>
    axios.post(COMPANY_LOC, CompanyLocParams, headersJson),
  companyContact: (CompanyConParams) =>
    axios.post(COMPANY_CONTACT, CompanyConParams, headersJson),

  //   AS FREELANCER
  // frInfo: (frInfoParams) => axios.post(FRL_USER, frInfoParams, headers), BULAR CompleteForm ICHIDA AXIOSDAYOZILGAN
  // frAddress: (frAddressParams) => axios.post(FRL_ADDRESS, frAddressParams, headers), BULAR CompleteForm ICHIDA AXIOSDAYOZILGAN
  frPosition: (frPositionParams) =>
    axios.post(FRL_POSITION, frPositionParams, headersJson),
  frLang: (frLangParams) => axios.post(FRL_LANGUAGE, frLangParams, headersJson),
  frExperience: (frExpParams) =>
    axios.post(FRL_EXPERINCE, frExpParams, headersJson),
  frEducation: (frEduParams) =>
    axios.post(FRL_EDUCATION, frEduParams, headersJson),

  // CREATE POST AS COMPANY
  companyPostTitle: (companyPostTitle) =>
    axios.post(COMPANY_POST_TITLE, companyPostTitle, headersJson),
  companyPostDesc: (companyPostDesc) =>
    axios.post(COMPANY_POST_DESC, companyPostDesc, headersForm),
  companyPostTalant: (companyPostTalant) =>
    axios.post(COMPANY_POST_TALANT, companyPostTalant, headersJson),
  companyPostContract: (companyContract) =>
    axios.post(COMPANY_POST_CONTRACT, companyContract, headersJson),
  saveCompanyJob: (jobSave) =>
    axios.post(COMPANY_JOB_SAVE, jobSave, headersForm),
};

export default POST;
