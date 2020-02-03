import * as api from '../api'


import React, { Component } from 'react'
// import BarChart from './Charts/BarChart'
// import Donut from './Charts/Donut'
// import LineChart from './Charts/LineChart'
// import DynamicLine from './Charts/DynamicLine'


export default class DataVisualisation extends Component {
  state = {
    username: 'bigcal'
  }

  render() {
    return (
      <div>
        <p>what up yo</p>
        {/* <BarChart />
        <Donut />
        <LineChart />
        <DynamicLine /> */}
      </div>
    )
  }

  componentDidMount() {
    const { username } = this.state
    api.getEmotions(username).then(response => {
      console.log(response)
    })
  }
}
