import React, { useState, useEffect } from "react";
import axios from "axios";
import CookieImg from "../../Figure/cookieImg";
import Quote from "../../Context/Quote/quote";
import "./styles.scss";

const MainContent = () => {
  const [quoteContent, setQuoteContent] = useState(null);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    if (showQuote) {
      axios
        .get("https://api.quotable.io/random")
        .then((response) => {
          setQuoteContent(response.data.content);
        })

        
        .catch((error) => {
          setQuoteContent(error);
        });
      setShowQuote(false);
    }
  }, [showQuote]);

  return (
    <main>
      <h1>Click Fortune Cookie</h1>

      <CookieImg setShowQuote={setShowQuote} />

      <Quote quoteContent={quoteContent} />
    </main>
  );
};

export default MainContent;
