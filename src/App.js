import React, { Component } from "react";
import cookie from "./img/cookie.jpg";

class App extends Component {
  state = {
    quote: null
  };

  getQuote = () => {
    setTimeout(
      function() {
        this.setState({
          quote: this.props.quotes[Math.floor(Math.random() * 20)]
        });
      }.bind(this),
      250
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

const MainContent = props => {
  return (
    <main>
      <h1>Click Fortune Cookie</h1>

      <img
        src={cookie}
        alt="fortune cookie"
        width="200"
        onClick={props.getQuote}
      />

      <p>{props.quote}</p>
    </main>
  );
};

App.defaultProps = {
  quotes: [
    "A smile is your passport into the hearts of others.",
    "What ever your goal is in life, embrace it, visualize it, and for it will be yours.",
    "You cannot love life until you live the life you love.",
    "The man or woman you desire feels the same about you.",
    "Our deeds determine us, as much as we determine our deeds.",
    "You can make your own happiness.",
    "A stranger is a friend you have not spoken to yet.",
    "A journey of a thousand miles begins with a single step.",
    "Believing that you are beautiful will make you appear beautiful to others around you.",
    "If you refuse to accept anything but the best, you very often get it.",
    "Failure is only the opportunity to begin again more intelligently.",
    "Integrity is doing the right thing, even if nobody is watching.",
    "Conquer your fears or they will conquer you.",
    "In this life it is not what we take up, but what we give up, that makes us rich.",
    "A single conversation with a wise man is better than ten years of study.",
    "The world may be your oyster, but that doesn't mean you'll get it's pearl.",
    "Do not follow where the path may lead. Go where there is no path...and leave a trail.",
    "We can't help everyone. But everyone can help someone.",
    "All the water in the world can't sink a ship unless it gets inside.",
    "Generosity will repay itself sooner than you imagine."
  ]
};

export default App;
