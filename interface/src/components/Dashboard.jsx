import React, { Component } from 'react'
import { Link } from '@reach/router'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        <Link to="/webcam">
          <button>
            View cam
         </button>
        </Link>
      </div>
    )
  }
}
