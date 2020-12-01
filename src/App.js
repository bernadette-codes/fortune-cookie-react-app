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
      function () {
        this.setState({
          quote: this.state.quotes[Math.floor(Math.random() * 20)]
        });
      }.bind(this),
      350
    );
  };

  render() {
    return (
      <div>
        {/* Home Link */}
        <nav>
          <a
            href="https://bernadetteestacio.site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
        </nav>

        <MainContent getQuote={this.getQuote} quote={this.state.quote} />

        <footer>
          <p>© 2015-{new Date().getFullYear()} Bernadette Estacio
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

      <img src={cookie} alt="fortune cookie" width="300" onClick={getQuote} />

      <p>{quote}</p>
    </main>
  );
};

export default App;
