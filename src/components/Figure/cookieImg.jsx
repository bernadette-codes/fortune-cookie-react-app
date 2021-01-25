import React from "react";
import Cookie from "../../img/cookie.jpg";
import "./styles.scss";

const CookieImg = ({ setShowQuote }) => (
  <div>
    <img
      src={Cookie}
      alt="fortune cookie"
      width="300"
      onClick={() => setShowQuote(true)}
    />
  </div>
);

export default CookieImg;
