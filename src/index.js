import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "./components/App.jsx";

if (typeof document !== "undefined") {
  React.render(<App />, document.getElementById("root"));
}

export default function render(locals, callback) {
  const html = ReactDOMServer.renderToStaticMarkup(
    React.createElement(App, locals)
  );
  callback(null, "<!DOCTYPE html>" + html);
}
