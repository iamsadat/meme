import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <p className="credit">© 2023 Meme Generator</p>
      <p>
        <a
          href="https://github.com/iamsadat/meme"
          target="_blank"
          className="social"
        >
          Source Code
        </a>
      </p>
      <p>
        <a href="https://twitter.com/sxdatt" target="_blank" className="social">
          Twitter
        </a>
      </p>
      <p>
        <a
          href="https://github.com/iamsadat"
          target="_blank"
          className="social"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}
