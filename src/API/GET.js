import axios from "axios";
import { BaseUrl } from "./POST";

export const baseUrl = "http://localhost:5000/";

const GET_COUNTRY = `${baseUrl}api/GetInformation/Countries`;
const GET_POSITION = `${baseUrl}api/GetInformation/Positions`;
const GET_LANGUAGE = `${baseUrl}api/GetInformation/Languages`;
const GET_CURRENCY = `${baseUrl}api/GetInformation/Currencies`;
const GET_DEADLINERATE = `${BaseUrl}api/GetInformation/DeadlineRates`;
const GET_EDUCATION = `${baseUrl}api/FreelancerEducation`;
const GET_FRL_LANG = `${baseUrl}api/FreelancerLanguage`;

const GET_EXPERIENCE = `${baseUrl}api/FreelancerExperience`;

const GET_INFORMATION_POSITION = `${baseUrl}api/GetInformation/Positions`;
const GET_INFORMATION_SKILLS = `${BaseUrl}api/GetInformation/Skills`;

const token = JSON.parse(localStorage.getItem("token"));

const headers = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const GET = {
  Countries: () => axios.get(GET_COUNTRY, headers),
  Positions: () => axios.get(GET_POSITION, headers),
  Langs: () => axios.get(GET_LANGUAGE, headers),
  Exp: () => axios.get(GET_EXPERIENCE, headers),
  Edu: () => axios.get(GET_EDUCATION, headers),

  FrLng: () => axios.get(GET_FRL_LANG, headers),

  InfPosition: () => axios.get(GET_INFORMATION_POSITION, headers),
  InfSkills: () => axios.get(GET_INFORMATION_SKILLS, headers),
  InfCurrency: () => axios.get(GET_CURRENCY, headers),
  InfDeadlineRate: () => axios.get(GET_DEADLINERATE, headers),
};

export default GET;
