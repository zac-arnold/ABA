import React from 'react'
import * as d3 from 'd3'
import { connect } from 'react-redux'
import { sumOfAmounts, incomefrequencyAdjustment, expensefrequencyAdjustment, compressObjKeystoUniqueArray, sumPercentageValuesOfObject } from './mathfunctions'

class DonutGraph extends React.Component {
  componentDidMount () {
    let i = 0
    const circleAnimation = () => {
      if (i++ < 150) {
        d3.selectAll('svg > *').remove()
        this.updateGraph({ Surplus: 100 }, (0.8 + Math.sin(i / 10) / 55))
        setTimeout(circleAnimation, 30)
      }
    }
    circleAnimation()
  }

  componentDidUpdate () {
    const { expenses, incomes } = this.props

    if (expenses.length > 0 && incomes.length > 0) { // case both filled out
      const { data, totalExpenses } = this.updateData(this.props)
      let x = 0
      const textAnimation = () => {
        if (x++ < 50) {
          d3.selectAll('svg > *').remove()
          this.updateGraph(data, 0.8, '$' + (totalExpenses * (x / 50)).toFixed(2), 'your balance')
          setTimeout(textAnimation, 10)
        }
      }
      textAnimation()
    } else if (!(incomes.length > 0) && expenses.length > 0) { // case expense only filled out
      const timeframe = 30.4375
      const frequencyAdjustedExpenses = incomefrequencyAdjustment(expenses, timeframe)
      const totalExpenses = sumOfAmounts(frequencyAdjustedExpenses)
      const data = sumPercentageValuesOfObject(frequencyAdjustedExpenses, compressObjKeystoUniqueArray(frequencyAdjustedExpenses), totalExpenses)
      delete data.Difference
      let x = 0
      const textAnimation = () => {
        if (x++ < 50) {
          d3.selectAll('svg > *').remove()
          this.updateGraph(data, 0.8, '-$' + (totalExpenses * (x / 50)).toFixed(2), 'your balance')
          setTimeout(textAnimation, 10)
        }
      }
      textAnimation()
    } else if (incomes.length > 0 && !(expenses.length > 0)) { // case input only filled out
      const timeframe = 30.4375
      const frequencyAdjustedIncomes = incomefrequencyAdjustment(incomes, timeframe)
      const totalIncomes = sumOfAmounts(frequencyAdjustedIncomes)
      let x = 0
      const textAnimation = () => {
        if (x++ < 50) {
          d3.selectAll('svg > *').remove()
          this.updateGraph({ Surplus: 100 }, 0.8, '$' + (totalIncomes * (x / 50)).toFixed(2), 'your balance')
          setTimeout(textAnimation, 10)
        }
      }
      textAnimation()
    } else {
      this.updateGraph({ Surplus: 100 }, 0.8, '$0', 'enter your data')
    }
  }

  // {56: 5.783125, Surplus: 71.327875, "": 19.48, df: 3.409}
  // {56: 5.783125, Surplus: 57.326625, "": 19.48, df: 3.409, rt: 14.001249999999999}

  updateData = (props) => {
    const { incomes, expenses } = props
    const timeframe = 30.4375// set at monthly for now (days in a month)
    const adjustedincomes = incomefrequencyAdjustment(incomes, timeframe)
    const adjustedexpenses = expensefrequencyAdjustment(expenses, timeframe)
    const totalIncome = sumOfAmounts(adjustedincomes)
    const totalExpenses = sumOfAmounts(adjustedexpenses)
    const data = sumPercentageValuesOfObject(adjustedexpenses, compressObjKeystoUniqueArray(adjustedexpenses), totalIncome)
    const graphData = {
      data: data,
      totalExpenses: (totalIncome - totalExpenses)
    }
    return graphData
  }

  updateGraph = (data = { Surplus: 100 }, animateRadius, message = 'Enter your data', label = '') => {
    const height = 750
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
      .attr('transform', 'translate(' + 250 + ',' + 250 + ')')

    // set the color scale
    const colourPairs = { Home: '#ECA4A6', Food: '#651A83', Utilities: '#9EC1FF', Transport: '#A56B38', Subscriptions: '#F1F227', Entertainment: '#E74E21', Personal: '#4AC200', Insurance: '#E6BCFF', Surplus: '#2ECCB0' }
    const color = (name) => {
      return colourPairs[name]
    }

    // Compute the position of each group on the pie:
    const pie = d3.pie()
      .sort(null) // Do not sort group by size
      .value(function (d) { return d.value })
    const dataReady = pie(d3.entries(data))

    // The arc generator
    const arc = d3.arc()
      .innerRadius(radius * 0.6) // This is the size of the donut hole
      .outerRadius(radius * animateRadius)

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
      .attr('x', '0%')
      .attr('y', -30)
      .attr('text-anchor', 'middle')
      .style('font-family', 'Helvetica')
      .style('font-size', '15px')
      .text(`${label}`)

    svg
      .append('text')
      .attr('x', '0%')
      .attr('y', '0%')
      .attr('text-anchor', 'middle')
      .style('font-family', 'Helvetica')
      .style('font-size', '25px')
      .text(`${message}`)

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
      .style('opacity', 1.0)

    // chart legend//////
    if (message !== 'Enter your data') {
      let spacing = 0
      for (const key in data) {
        svg
          .append('rect')
          .attr('x', '-100px')
          .attr('y', `${272 + spacing}px`)
          .attr('width', 20)
          .attr('height', 20)
          .attr('fill', `${color(key)}`)

        svg
          .append('text')
          .attr('x', '0%')
          .attr('y', `${290 + spacing}px`)
          .attr('text-anchor', 'middle')
          .style('font-family', 'Helvetica')
          .style('font-size', '20px')
          .text(`${key}`)
        spacing += 30
      }
    }
  }

  render () {
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
