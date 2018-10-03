import React from 'react';
import CarouselItem from './CarouselItem';

class Carousel extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        items: this.refill_items(),
        active: this.props.active,
        direction: ''
      }
      this.rightClick = this.moveRight.bind(this)
      this.leftClick = this.moveLeft.bind(this)
  }

  generateItems = () => {
    var items = []
    var level
    for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
      var index = i
      if (i < 0) {
        index = this.state.items.length + i
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length
      }
      level = this.state.active - i
      items.push(<CarouselItem key={index} id={this.state.items[index]} level={level} transition={this.state.direction}/>)
    }
    return items
  }

  moveLeft = () => {
    var newActive = this.state.active
    newActive--
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: 'left'
    })
  }

  moveRight = () => {
    var newActive = this.state.active
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: 'right'
    })
  }

  refill_items = () => {
     var items = this.props.items
    if (items.length <= 5) {
      while(items.length <= 5){
        items = items.concat(this.props.items)
      }
    }
    return items
  }

  render() {
    console.log(this.state.items)
    return(
      <div id="carousel">
        <ul>
          {this.generateItems()}
        </ul>
        <div className="arrow arrow-left" onClick={this.leftClick}></div>
        <div className="arrow arrow-right" onClick={this.rightClick}></div>
      </div>
    )
  }
}

export default Carousel;