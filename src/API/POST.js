
import axios from "axios";

const LOGIN_URL = "http://localhost:5276/login";
const REGISTER_URL = "http://localhost:5276/register";
const COMPANY_ADD = "https://mycareer2.na4u.ru/api/company";
const FREELANCER_ADD = "https://mycarrier.uz.napaautomotive.uz/api/freelancer";

const tokenLocalStorage = localStorage.getItem("token")
console.log(tokenLocalStorage);
const headers = {
  headers: {
    "Accept": "application/json;",
    // Authorization: `Bearer ${tokenLocalStorage}`,
  },
};

const POST = {
  login: (LoginParams) => axios.post(LOGIN_URL, LoginParams,headers),
  register: (params) => axios.post(REGISTER_URL, params,headers),
  companyadd: (CompanyParams) => axios.post(COMPANY_ADD, CompanyParams,headers),
  freelanceradd: (FreelancParams) => axios.post(FREELANCER_ADD, FreelancParams,headers),
}

export default POST 