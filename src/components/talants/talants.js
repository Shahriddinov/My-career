import React, { useState } from "react";
import LoggedTalents from "../logged-talents/logged-talents";
import LoggingTalents from "../logging-talents/logging-talents";

function Talants() {
  const [isLogged, setLogged] = useState(true);

  if (isLogged === false) {
    return <LoggingTalents />;
  } else {
    return <LoggedTalents />;
  }
}

export default Talants;
