import axios from "axios";

export const baseUrl = "https://golibjon.bsite.net/";

const GET_COUNTRY = `${baseUrl}api/GetInformation/Countries`
const GET_POSITION = `${baseUrl}api/GetInformation/Positions`
const GET_LANGUAGE = `${baseUrl}api/GetInformation/Languages`
const GET_EDUCATION = `${baseUrl}api/FreelancerEducation`
const GET_FRL_LANG = `${baseUrl}api/FreelancerLanguage`


const GET_EXPERIENCE = `${baseUrl}api/FreelancerExperience`

const token = JSON.parse(localStorage.getItem("token"));

const headers = {
  headers: {
    'Authorization': `Bearer ${token}`,
  },
};




const GET = {
  Countries : () => axios.get(GET_COUNTRY, headers),
  Positions : () => axios.get(GET_POSITION, headers),
  Langs : () => axios.get(GET_LANGUAGE, headers),
  Exp: () => axios.get(GET_EXPERIENCE, headers),
  Edu: () => axios.get(GET_EDUCATION, headers),

  FrLng: () => axios.get(GET_FRL_LANG, headers),
}

export default GET;