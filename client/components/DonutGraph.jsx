import React from 'react'
import * as d3 from 'd3'
import { connect } from 'react-redux'

class DonutGraph extends React.Component {
  state = {
    count: false
  }

  componentDidMount() {
    // this.updateGraph(this.updateData(this.props))
    this.setState({
      count: true
    })
  }

  componentDidUpdate() {
    d3.selectAll('svg > *').remove()
    this.updateGraph(this.updateData(this.props))
  }

  updateData = (props) => {
    const frequency = 30.4375 // days in a year

    const Income = props.incomes.reduce((acc, value) => acc + value.amount)

    const totalIncome = Income / 365 // hardcoded for now

    // this function puts all categories into an array of unique values
    const categories = []
    props.expenses.forEach(expense => {
      if (categories.indexOf(expense.category) === -1) {
        categories.push(expense.category)
      }
    })

    // this function uses the unique category array to sum all amounts of that category
    const data = {}
    let sumTotal = 0
    categories.forEach(category => {
      props.expenses.forEach(expense => {
        if (expense.category === category) {
          if (data[category]) {
            data[category] += expense.amount
            sumTotal += expense.amount
          } else {
            data[category] = expense.amount
            sumTotal += expense.amount
          }
        }
      })
      // convert values to percentage of total income
      data[category] = (100 / totalIncome) * data[category]
    })
    // convert values to percentage of total income
    const difference = 100 - ((100 / totalIncome) * sumTotal)
    data.Surplus = difference
    return data
  }

  updateGraph = (data) => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    const height = vh / 2
    const width = vw / 2
    const margin = 0

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    const radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'donut-graph '
    const svg = d3.select('#my_dataviz')
      .classed('svg-container', true)
      .classed('svg-content-responsive', true)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

    // set the color scale
    const color = d3.scaleOrdinal()
      .domain(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])
      .range(d3.schemeSpectral[9])

    // Compute the position of each group on the pie:
    const pie = d3.pie()
      .sort(null) // Do not sort group by size
      .value(function (d) { return d.value })
    const dataReady = pie(d3.entries(data))

    // The arc generator
    const arc = d3.arc()
      .innerRadius(radius * 0.6) // This is the size of the donut hole
      .outerRadius(radius * 0.8)

    //inner border circle
    svg
      .append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', radius * 0.56)
      .attr('stroke', 'grey')
      .attr('fill', 'white')
      .attr('stroke-width', 2)

    //inner solid circle
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
