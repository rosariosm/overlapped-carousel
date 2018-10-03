import React from 'react';

class CarouselItem extends React.Component {    
  constructor(props) {
    super(props)
      this.state = {
      level: this.props.level,
      transition: this.props.transition
    }
  }
    
  render() {
    const className = 'item level' + this.props.level        
    return(                           
      <li className={className}>
        <img src="https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg"/>
      </li> 
    )
  }
}

export default CarouselItem;