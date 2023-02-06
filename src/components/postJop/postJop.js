import React, { useState } from "react";
import { token } from "../../API/POST";
import LoggedJobs from "../logged-jobs/logged-jobs";
import LoggingJobs from "../logging-jobs/logging-jobs";

const PostJop = () => {
  if (token) {
    return <LoggedJobs />;
  } else {
    return <LoggingJobs />;
  }
};

export default PostJop;
