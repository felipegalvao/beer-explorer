import React from "react";
import ReactDOM from "react-dom";

import App from "./screens/App/components/App.jsx";

// App css
require("bulma/bulma.sass");
require("./styles/app.scss");

ReactDOM.render(<App />, document.getElementById("app"));
