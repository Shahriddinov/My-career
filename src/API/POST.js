
import axios from "axios";

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3IiwianRpIjoiMjZkMThhNTg3NDIyZmQyYTQzZjYyODNmMWM0NDUxZGVlZTdmNTdkNGVjMDhlZjA4YmUzN2MxMTIxODUyYzc4ZWIxYTk0MTFjZDg2MDdlMmEiLCJpYXQiOjE2NjYwMDIxNzcuNzU4ODQ1LCJuYmYiOjE2NjYwMDIxNzcuNzU4ODQ4LCJleHAiOjE2OTc1MzgxNzcuNzUyNjIxLCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.rhBC0vNvkdgC3gAuVaVWRCOXGfDLzeyZgPBrueLdfk6bBoX2gx_muC1-HfmILDHSlfw_TbUS1GgG9jtc6kBUurrx_h30Havw3p0Bq1GYpa7zJqaP8yWKeDm73d_-HpnAC7hG75s2jLKcUnFlm2R3UG6uh9w7rCLfS9_TykRM0Y8h8HmpSi6bvOlqSqdHJL1MFWsymOqJxxtJTTJLG5s0KxqwRgdbJXtfSQnjgd5l4I9ULagLat9yPnnEGQR6VgodOir1gAsU_Sq7NLpXaUZnGXQLdnp4hogvsmZezKbJb1gigHBtfdcZndlKqRFQGENWayo5eFxO0jzwdLZPfLU3jxiF1Dz7pnbuc50WgXyQW9pTRZ5oxuiyCGMLNOfd9svyN0ZFUXkBm3ySRqca3rAX9RITa4sJnAc-owF1al_w9r7dzVSH42KJQv6aH_l8DUQuqUt4fOHlhw2rTbzsS0CGHvPoCJH6NTVGWMqrhl4JHd6R4uw-tBZdrEs9-YhKtiJ7dCFiHVgTCQWQIhJqYFiUvglR6haElG96s4xG6-O2roWK1Y2zRLZJQeIh7fWqgQfpjIyp5Cnl-p0v50OpjuzG3-fsQWGcMXAcb0WgkCNrWLuGtuYK0IrVsVlKrHT2WnSEBkSt4jDmzl0hqyvCrz0JBq7LEKmecQ4t8FksfNvcyZs";

const LOGIN_URL = "https://mycareer2.na4u.ru/api/login";
const REGISTER_URL = "https://mycareer2.na4u.ru/api/register ";
const COMPANY_ADD = "https://mycareer2.na4u.ru/api/company";

const tok = localStorage.getItem("token")
const headers = {
  headers: {
    "Accept": "application/json;",
    // Authorization: `Bearer ${tok}`,
  },
};

const POST = {
  login: (LoginParams) => axios.post(LOGIN_URL, LoginParams,headers),
  register: (params) => axios.post(REGISTER_URL, params,headers),
  companyadd: (CompanyParams) => axios.post(COMPANY_ADD, CompanyParams,headers),
}

export default POST 