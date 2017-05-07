import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import App from "./screens/App";
const store = require("./shared/store/configureStore.jsx").configure();

// App css
require("bulma/bulma.sass");
require("./styles/app.scss");

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);
