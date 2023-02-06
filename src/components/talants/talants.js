import React, { useState } from "react";
import LoggedTalents from "../logged-talents/logged-talents";
import LoggingTalents from "../logging-talents/logging-talents";
import { token } from "../../API/POST";

const Talants = () => {
  if (token) {
    return <LoggedTalents />;
  } else {
    return <LoggingTalents />;
  }
};

export default Talants;
