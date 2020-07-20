import React from 'react'
import * as d3 from 'd3'
import { connect } from 'react-redux'
import { sumOfAmounts, frequencyAdjustment, compressObjKeystoUniqueArray, convertToPercentageOfIncome, sumPercentageValuesOfObject } from './mathfunctions'

class DonutGraph extends React.Component {
  state = {
    previousData: {}
  }

  componentDidMount() {
    let i = 0
    const circleAnimation = () => {
      if (i++ < 200) {
        d3.selectAll('svg > *').remove()
        this.updateGraph({Surplus: 100}, (0.8 + Math.sin(i / 10) / 55))
        setTimeout(circleAnimation, 30)
      }
    }
    circleAnimation()
  }

  componentDidUpdate() {
    d3.selectAll('svg > *').remove()
    this.updateGraph(this.updateData(this.props))
  }

  // {56: 5.783125, Surplus: 71.327875, "": 19.48, df: 3.409}
  // {56: 5.783125, Surplus: 57.326625, "": 19.48, df: 3.409, rt: 14.001249999999999}

  updateData = (props) => {

    const { incomes, expenses } = props
    const timeframe = 30.4375// set at monthly for now (days in a month)
    const adjustedincomes = frequencyAdjustment(incomes, timeframe)
    const adjustedexpenses = frequencyAdjustment(expenses, timeframe)
    const totalIncome = sumOfAmounts(adjustedincomes)
    console.log(totalIncome)
    // this function puts all categories into an array of unique values
    const categories = compressObjKeystoUniqueArray(adjustedexpenses)
    // this function uses the unique category array to sum all amounts of that category
    const { data, sumTotalExpenses } = sumPercentageValuesOfObject(adjustedexpenses, categories, totalIncome)
    console.log(data)
    // convert values to percentage of total income
    const difference = 100 - convertToPercentageOfIncome(totalIncome, sumTotalExpenses)
    console.log(difference)

    if (!(data.Surplus)) {
      return { Surplus: 100 }
    } else {
      data.Surplus = difference
    }
    console.log(data)
    return data
  }

  updateGraph = (data, animate_radius) => {
    const height = 500
    const width = 500
    // const margin = 0

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    const radius = Math.min(width / 1.7, height / 1.7)

    // append the svg object to the div called 'donut-graph '
    const svg = d3.select('#my_dataviz')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      // attr('transform-origin', '250px, 250px')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

    // set the color scale
    var color = d3.scaleOrdinal()
      .domain(data)
      .range(['#a0f5b7', '#002455', '#36a59c', '#64cda3', '#15637d'])

    // Compute the position of each group on the pie:
    const pie = d3.pie()
      .sort(null) // Do not sort group by size
      .value(function (d) { return d.value })
    const dataReady = pie(d3.entries(data))

    // The arc generator
    const arc = d3.arc()
      .innerRadius(radius * 0.6) // This is the size of the donut hole
      .outerRadius(radius * animate_radius)

    // inner border circle
    svg
      .append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', radius * 0.56)
      .attr('stroke', 'grey')
      .attr('fill', 'white')
      .attr('stroke-width', 2)

    // inner solid circle
    svg
      .append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', radius * 0.52)
      .attr('stroke', 'white')
      .attr('fill', '#A0F5B7')
      .attr('stroke-width', 2)

    svg
      .append('text')
      .attr('x', -30)
      .attr('y', -15)
      .style('font-family', 'Helvetica')
      .style('font-size', '15px')
      .text('you spent')

    svg
      .append('text')
      .attr('x', -35)
      .attr('y', 15)
      .style('font-family', 'Helvetica')
      .style('font-size', '30px')
      .text('$1615')

    // svg
    //   .append('rect')
    //   .attr('width', 100)
    //   .attr('height', 100)
    //   .style('fill', 'rgb(0,0,255)')
    //   .style('font-size', '30px')
    //   .text('$1615')

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll('allSlices')
      .data(dataReady)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', function (d) { return (color(d.data.key)) })
      .attr('stroke', 'white')
      .style('stroke-width', '2px')
      .style('opacity', 0.7)
  }

  render() {
    return null
  }
}


const mapStateToProps = (state) => {
  return {
    incomes: state.income,
    expenses: state.expense
  }
}

export default connect(mapStateToProps)(DonutGraph)
