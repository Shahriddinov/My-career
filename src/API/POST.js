import axios from "axios";

export const BaseUrl = "https://golibjon.bsite.net/";

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
const FRL_POSITION= `${BaseUrl}api/Freelancer/Position` 
const FRL_LANGUAGE= `${BaseUrl}api/FreelancerLanguage`
const FRL_EXPERINCE= `${BaseUrl}api/FreelancerExperience`
const FRL_EDUCATION= `${BaseUrl}api/FreelancerEducation`

export const token = JSON.parse(localStorage.getItem("token"));
const headers = {
  headers : { 'Authorization' : `Bearer ${token}` }
}


const POST = {

  //   AS COMPANY 
  login: (LoginParams) => axios.post(LOGIN_URL, LoginParams, headers),
  register: (params) => axios.post(REGISTER_URL, params, headers),
  companyUser: (CompanyUserParams) => axios.post(COMPANY_USER, CompanyUserParams, headers),
  company: (CompanyParams) => axios.post(COMPANY, CompanyParams, headers),
  companyLoc: (CompanyLocParams) => axios.post(COMPANY_LOC, CompanyLocParams, headers),
  companyContact: (CompanyConParams) => axios.post(COMPANY_CONTACT, CompanyConParams, headers),


  //   AS FREELANCER
  // frInfo: (frInfoParams) => axios.post(FRL_USER, frInfoParams, headers), BULAR CompleteForm ICHIDA AXIOSDAYOZILGAN
  // frAddress: (frAddressParams) => axios.post(FRL_ADDRESS, frAddressParams, headers), BULAR CompleteForm ICHIDA AXIOSDAYOZILGAN
  frPosition: (frPositionParams) => axios.post(FRL_POSITION, frPositionParams, headers),
  frLang: (frLangParams) => axios.post(FRL_LANGUAGE, frLangParams, headers),
  frExperience: (frExpParams) => axios.post(FRL_EXPERINCE, frExpParams, headers),
  frEducation: (frEduParams) => axios.post(FRL_EDUCATION, frEduParams, headers),
}

export default POST;