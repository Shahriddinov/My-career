
import axios from "axios";

const tokenLocalStorage = localStorage.getItem("token")
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3IiwianRpIjoiYjg0YWJjMmM5NzcwOWUwOGE2YmE2N2NkM2YwNjVlOTllZjk2ZGUyMWM1OWM2NmRmN2E2MWM3MGFmYzQxZTVlOGRhOTMxZjgwMjRjZTc2MjAiLCJpYXQiOjE2NjU5MDY1MjIuNjkzNTMsIm5iZiI6MTY2NTkwNjUyMi42OTM1MzUsImV4cCI6MTY5NzQ0MjUyMi42ODU4NzEsInN1YiI6IjQiLCJzY29wZXMiOltdfQ.RpHkto2iwVDi5t4BjfFsBXZeKbSZcGD04JzE30K6cYkc7AykiKLzGXxjXpXYIIki-MEOVVKTV7NJPfxOzI4_gJLonqAGWuYsEGW8wUEVrETXh51WJVLxF2iMCniSQZDis5dj-oRf-5OVMNV6daX5RtatPrdzap6zQ2VJikfpuvsIIGLJotPVqpQi-TzKSjiw6Ac9M1Zgr8KIx60ORrVGJvzLwSkeL6MQpl8z-7xsa-UoR_12gf5QAiQoHh7Ko_oNTq81kmArrmT_Y1KNz5uGcYehIQHOoE7_Oq7hq92_KJXhHc5YB6k-IGn0Iqcm1YPJ7gFJNY91U2RB80RMQN7ZiRhWJ-VRGlrJ7ZPYlL90Wt_AL_3KG8svCH8Zt2j_nLdOh3crGWf-ENFwp9n7HT4D56GZwR7VgFLlVBCYt5pcD_p8qoeQkuBH0-Srd978kyLVF6O6fx3lRM4vyZIcmP0XCppAulZ8tr4iqKIHVAWf3VQkN0bQQP0a47zP2e5id71GvA3fQPda_lKn7v9WUdy7Sm6HneMOFI9b-gGA7QA8cJInjUvDWWUmtNRhThmJWYhQ7PTtzdp1CDqD5Dyi8IClmxTFCNJbd-s01u2v29AxESjJIlYZRo33chF2pquOI4zy9OrF5h97F1qV-40MwMc6tg18fDtlPjUcC4kJF5OPCeM";
const headers = {
  headers: {
    "Accept": "application/json;",
    Authorization: `Bearer ${tokenLocalStorage}`,
  },
};


const USERS = "https://mycareer2.na4u.ru/api/all-user"; // BARCHA USERLAR 
const COMPANY = "https://mycareer2.na4u.ru/api/get-company" // COMPANIYALAR

const GET = {
  USERS: () => axios.get(USERS, headers),
  COMPANY: () => axios.get(COMPANY, headers),
}

export default GET 