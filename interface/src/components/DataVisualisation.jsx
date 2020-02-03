import * as api from '../api'

import React, { Component } from 'react'

export default class DataVisualisation extends Component {
  state = {
    username: 'bigcal'
  }

  render() {
    return (
      <div>
        <p>what up yo</p>
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
