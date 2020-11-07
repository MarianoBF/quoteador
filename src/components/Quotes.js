import React from "react";
import quotelist from "./quotelist.json";



class Quotes extends React.Component {

  constructor(props) {
    super(props);
    this.newQuote = this.newQuote.bind(this);
    this.state = { random: 0 };
  }

  newQuote() {
    let rand2 = Math.floor(Math.random() * 102);
    this.setState({ random: rand2    })
  }

  render () {

const allQuotes = quotelist.quotes.map(({ quote, author, id }) => (
 <div>
  <p id="text" key={id}>"{quote}"</p>
  <p id="author" key={id}>By: {author} </p>
</div>
  ));

return (
    <div id="quote">
      <div id="subdivquote">
      {allQuotes[this.state.random]}
      <p>Quote number: {this.state.random}</p>
      </div>
      <button id="new-quote" onClick={this.newQuote}>New Quote</button>
      {/* Acá sería bueno agregar el texto de la cita en el tweet */}
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw"  data-text="Esta cita está muy buena" data-url=" " className="twitter-share-button" id="tweet-quote">Tweet</a>
    </div>
);
}
}

export default Quotes;
