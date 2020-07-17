import React, { Component, useState, useEffect } from 'react'
import * as d3 from 'd3'
import { connect } from 'react-redux'

const DonutGraph = (props) => {
  // set the dimensions and margins of the graph
  const [graphState, setGraphState] = useState({})

  useEffect(() => {
    const frequency = 30.4375 // days in a year
    const totalIncome = props.incomes[0].amount / frequency // divide yearly salary
    console.log('total:' + totalIncome)
    // this function puts all categories into an array of unique values
    const categories = []
    props.expenses.forEach(expense => {
      if (categories.indexOf(expense.category) === -1) {
        categories.push(expense.category)
      }
    })
    console.log('categories:' + categories)

    // this function uses the unique category array to sum all amounts of that category
    const data = {}
    categories.forEach(category => {
      props.expenses.forEach(expense => {
        if (expense.category === category) {
          if (data[category]) {
            data[category] += expense.amount
          } else {
            data[category] = expense.amount
          }
        }
      })
    })
    console.log('data:' + data.Treats)

    updateGraph(data)
  }, [graphState])

  const updateGraph = (data) => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    const width = vw / 2
    const height = vh / 1.5
    const margin = 20

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    const radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'donut-graph '
    const svg = d3.select('#donut-graph')
      .append('svg')
      .attr('id', 'graph-container')
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

    // Create dummy data
    // const data = { Accomodation: 9, Groceries: 20, Utilities: 30, Insurance: 8, Debt: 12, Subscriptions: 3, Treats: 14 }

    // set the color scale
    const color = d3.scaleOrdinal()
      .domain(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])
      .range(d3.schemeDark2)

    // Compute the position of each group on the pie:
    const pie = d3.pie()
      .sort(null) // Do not sort group by size
      .value(function (d) { return d.value })
    const data_ready = pie(d3.entries(data))

    // The arc generator
    const arc = d3.arc()
      .innerRadius(radius * 0.6) // This is the size of the donut hole
      .outerRadius(radius * 0.8)

    // Another arc that won't be drawn. Just for labels positioning
    const outerArc = d3.arc()
      .innerRadius(radius * 0.6)
      .outerRadius(radius * 0.8)

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll('allSlices')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', function (d) { return (color(d.data.key)) })
      .attr('stroke', 'white')
      .style('stroke-width', '2px')
      .style('opacity', 0.7)

    // Add the polylines between chart and labels:
    // svg
    //   .selectAll('allPolylines')
    //   .data(data_ready)
    //   .enter()
    //   .append('polyline')
    //   .attr('stroke', 'black')
    //   .style('fill', 'none')
    //   .attr('stroke-width', 1)
    //   .attr('points', function (d) {
    //     var posA = arc.centroid(d) // line insertion in the slice
    //     var posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
    //     var posC = outerArc.centroid(d) // Label position = almost the same as posB
    //     var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
    //     posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1) // multiply by 1 or -1 to put it on the right or on the left
    //     return [posA, posB, posC]
    //   })

    // Add the polylines between chart and labels:
    svg
      .selectAll('allLabels')
      .data(data_ready)
      .enter()
      .append('text')
      .text(function (d) { return d.data.key })
      .attr('transform', function (d) {
        var pos = outerArc.centroid(d)
        // var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        // pos[0] = radius * 0.5 * (midangle < Math.PI ? 1 : -1)
        return 'translate(' + pos + ')'
      })
      .style('text-anchor', function (d) {
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        return (midangle < Math.PI ? 'start' : 'end')
      })
  }

  return (

    <div id='donut-graph'></div>

  )
}

const mapStateToProps = (state) => {
  return {
    incomes: state.income.income,
    expenses: state.income.expenses
  }
}

export default connect(mapStateToProps)(DonutGraph)
