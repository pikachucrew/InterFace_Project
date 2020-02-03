import * as api from '../api'


import React, { Component } from 'react'
// import BarChart from './Charts/BarChart'
import Donut from './Charts/Donut'
// import LineChart from './Charts/LineChart'
// import DynamicLine from './Charts/DynamicLine'


export default class DataVisualisation extends Component {
  state = {
    username: 'bigcal',
    data: [],
    isLoading: true
  }

  render() {
    const {data,isLoading}=this.state
    // console.log(this.state)
    if (isLoading ===true) return <p>Loading...</p> 
    return (
      <div>
        {/* <BarChart /> */}
        <Donut data={data} />
        {/* <LineChart />
        <DynamicLine /> */}
      </div>
    )
  }

  componentDidMount() {
    const { username } = this.state
    api.getEmotions(username).then(response => {
      this.setState({data:response, isLoading:false})
    })
  }
}
