import React from 'react'

import Title from './Title'
import SideBar from './SideBar'
import GraphSlider from './GraphSlider'

const Budget = () => {
  return (
    <div>
        <Title />
      <div>
        <SideBar />
      </div>
      <div id='budget-wrapper'>
        <GraphSlider />
      </div>
    </div>
  )
}

export default Budget
