import React from "react";
import quotelist from "./quotelist.json"


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
  <p id="text" key={id}> {quote} </p>
  <p id="author" key={id}> {author} </p>
  </div>
  ));

return (
    <div>
      {allQuotes[this.state.random]}
      <button id="new-quote" onClick={this.newQuote}>New Quote</button>
      <p>Número de Cita: {this.state.random}</p>
      {/* Acá sería bueno agregar el texto de la cita en el tweet */}
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw"  data-text="Esta cita está muy buena" data-url=" " className="twitter-share-button" id="tweet-quote">Tweet</a>
    </div>
);
}
}

export default Quotes;
