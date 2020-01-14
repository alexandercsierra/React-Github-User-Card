import React from 'react'
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components'

const CardFront = styled.div`
    background: green;
    width: 30%;
`;

const CardBack = styled.div`
    background: blue;
    width: 30%;
`;



class FlipCard extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
   
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <CardFront onClick={this.handleClick}>
            This is the front of the card.
            {/* <button onClick={this.handleClick}>Click to flip</button> */}
          </CardFront>
   
          <CardBack onClick={this.handleClick}>
            This is the back of the card.
            {/* <button onClick={this.handleClick}>Click to flip</button> */}
          </CardBack>
        </ReactCardFlip>
      )
    }
  }

  export default FlipCard