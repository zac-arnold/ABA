import React from 'react'
import Slider from 'react-slick'

import DonutGraph from './DonutGraph'

class GraphSlider extends React.Component {
  render () {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <Slider {...settings}>
        <div class='slider-frame'>
          <h3></h3>
          < DonutGraph />
        </div>
        <div class='slider-frame'>
          <h3></h3>
        </div>
        <div class='slider-frame'>
          <h3></h3>
        </div>
      </Slider>
    )
  }
}

export default GraphSlider
