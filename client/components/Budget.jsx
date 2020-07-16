import React from 'react'

import Title from './Title'
import SideBar from './SideBar'
import GraphSlider from './GraphSlider'

const Budget = () => {
  return (
    <>
        <Title />
      <div id='budget-wrapper'>
        <SideBar />
        <GraphSlider />
      </div>
    </>
  )
}

export default Budget
