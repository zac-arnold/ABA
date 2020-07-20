import React from 'react'
import * as d3 from 'd3'
import { connect } from 'react-redux'
import { sumOfAmounts, incomefrequencyAdjustment, expensefrequencyAdjustment, compressObjKeystoUniqueArray, sumPercentageValuesOfObject } from './mathfunctions'

class DonutGraph extends React.Component {
  componentDidMount() {
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

  componentDidUpdate() {
    if (this.props.expenses.length > 0 && this.props.incomes.length > 0) { // case both filled out
      const { data, totalExpenses } = this.updateData(this.props)
      let x = 0
      const textAnimation = () => {
        if (x++ <= 50) {
          d3.selectAll('svg > *').remove()
          this.updateGraph(data, 0.8, '$' + (totalExpenses * (x / 50)).toFixed(2), 'your balance')
          setTimeout(textAnimation, 10)
        }
      }
      textAnimation()
    } else if (!(this.props.incomes.length > 0) && this.props.expenses.length > 0) { // case expense only filled out
      let totalExpenses
      const timeframe = 30.4375
      if (this.props.expenses[0].frequency === 1 || this.props.expenses[0].frequency > timeframe) {
        totalExpenses = sumOfAmounts(this.props.expenses)
      } else {
        totalExpenses = sumOfAmounts(this.props.expenses) * (this.props.expenses[0].frequency / timeframe)
      }
      let x = 0
      const textAnimation = () => {
        if (x++ <= 50) {
          d3.selectAll('svg > *').remove()
          this.updateGraph({ Difference: 100 }, 0.8, '-$' + (totalExpenses * (x / 50)).toFixed(2), 'your balance')
          setTimeout(textAnimation, 10)
        }
      }
      textAnimation()
    } else if (this.props.incomes.length > 0 && !(this.props.expenses.length > 0)) { // case input only filled out
      let totalIncomes
      const timeframe = 30.4375
      if (this.props.incomes[0].frequency === 1 || this.props.incomes[0].frequency > timeframe) {
        totalIncomes = sumOfAmounts(this.props.incomes)
      } else {
        totalIncomes = sumOfAmounts(this.props.incomes) * (this.props.incomes[0].frequency / timeframe)
      }
      let x = 0
      const textAnimation = () => {
        if (x++ <= 50) {
          d3.selectAll('svg > *').remove()
          this.updateGraph({ Difference: 100 }, 0.8, '+$' + (totalIncomes * (x / 50)).toFixed(2), 'your balance')
          setTimeout(textAnimation, 10)
        }
      }
      textAnimation()
    } else {
      this.updateGraph({ Difference: 100 }, 0.8, '$0', 'enter your data')
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
      .style('font-size', '30px')
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
