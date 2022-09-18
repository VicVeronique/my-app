import React from "react";

import "./Source.css";

export default function Source() {
  return (
    <div className="source">
      <p>
        <small>
          <a
            href="https://github.com/VicVeronique/Vanilla-weather-app.git"
            target="_blank"
            className="open-source"
            rel="noreferrer"
          >
            Open-source code |
          </a>
          | by <span id="author">Vicveronique</span> <br />
          Hosted on |
          <a
            href="https://www.netlify.com/"
            target="_blank"
            className="open-source"
            rel="noreferrer"
          >
            | Netlify
          </a>
        </small>
      </p>
    </div>
  );
}
