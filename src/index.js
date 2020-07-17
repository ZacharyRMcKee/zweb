import React from 'react';
import ReactDOM from "react-dom";

import App from "./components/app.jsx";



ReactDOM.render(

  <App />,
  document.getElementById("root")
);
if (module.hot)
{
  module.hot.accept('./components/app.jsx', function() {
    console.log("Refreshing page");
    ReactDOM.render(<App />, document.getElementById("root"));
  })
}