import React from "react";
import quotelist from "./quotelist.json"


class Quotes extends React.Component {

  constructor(props) {
    super(props);
    this.newQuote = this.newQuote.bind(this);
    this.state = { random: 1 };
  }

  newQuote() {
    let rand2 = Math.floor(Math.random() * (50 - 1) + 1);
    this.setState({ random: rand2    })
  }



  render () {

const allQuotes = quotelist.quotes.map(({ quote, author, id }) => (
 <div>
  <p id="text" key={id}> {quote} </p>
  <p id="author" key={id}> {author} </p>
  </div>
  ))

return (
    <div>
          {allQuotes[this.state.random]}
      <p id="text"></p>
      <p id="author">aa</p>

      <button onClick={this.newQuote}>New Quote</button>
      {this.state.random}
      <a href="#" id="new-quote">Con un evento on click</a> 
      <a href="#" id="tweet-quote">Tweet</a>
    </div>
);
}
}

export default Quotes;
