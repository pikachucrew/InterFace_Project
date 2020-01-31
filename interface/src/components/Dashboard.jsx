import React, { Component } from 'react'
import { Link } from '@reach/router'
import * as faceapi from 'face-api.js'
import { startDetection } from '../utils/utils'



export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        <button onClick={startDetection}>Start detection</button>
        <Link to="/webcam">
          <button>
            View cam
         </button>
        </Link>
        <video autoPlay={true} id="invisible" width="0" height="0"></video>
      </div>
    )
  }

  componentDidMount() {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/weights'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/weights'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/weights'),
      faceapi.nets.faceExpressionNet.loadFromUri('/weights')
    ]).then(() => {
      console.log('weights loaded')
    })
  }
}
