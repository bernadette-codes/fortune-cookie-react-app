import React, { Component } from "react";
import { getQuotes } from "./quotes";
import cookie from "./img/cookie.jpg";

class App extends Component {
  state = {
    quotes: getQuotes(),
    quote: null
  };

  getQuote = () => {
    this.setState({
      quote: null
    });
    setTimeout(
      function() {
        this.setState({
          quote: this.state.quotes[Math.floor(Math.random() * 20)]
        });
      }.bind(this),
      750
    );
  };

  render() {
    return (
      <div>
        {/* Home Link */}
        <nav>
          <a
            href="http://bernadetteengleman.com/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
        </nav>

        <MainContent getQuote={this.getQuote} quote={this.state.quote} />

        <footer>
          <p>
            <small>
              Copyright © 2015-{new Date().getFullYear()} Bernadette Estacio.
              All rights reserved
            </small>
          </p>
        </footer>
      </div>
    );
  }
}

const MainContent = ({ getQuote, quote }) => {
  return (
    <main>
      <h1>Click Fortune Cookie</h1>

      <img src={cookie} alt="fortune cookie" width="200" onClick={getQuote} />

      <p>{quote}</p>
    </main>
  );
};

export default App;
