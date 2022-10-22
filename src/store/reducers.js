import size from "../reducers/careerReducer";
import append from "../reducers/appendReducer";
import resumes from "../reducers/resumesReducer";
import auth from "../reducers/authReducer";
import job from "../reducers/jobReducer"
import { MyReducers } from "../reducers/MyReducer";

const reducers = {
  size,
  append,
  resumes,
  auth,
  job,
  MyReducers,
};

export default reducers;