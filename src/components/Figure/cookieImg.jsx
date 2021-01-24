import React from "react";
import "./styles.scss";

const CookieImg = ({ setShowQuote }) => (
  <div>
    <img
      src="https://bernadetteestacio.site/assets/img/portfolio/cookie.jpg"
      alt="fortune cookie"
      width="300"
      onClick={() => setShowQuote(true)}
    />
  </div>
);

export default CookieImg;
