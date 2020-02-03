import React, { Component } from 'react'
import { Link } from '@reach/router'
import * as faceapi from 'face-api.js'
import { startDetection, startVideo } from '../utils/utils'
import DataVisualisation from './DataVisualisation'



export default class Dashboard extends Component {

  state = { videoPresent: false, username: "bigcal" }

  render() {
    const {videoPresent, username}= this.state
    console.log(username);
    console.log(this.state.videoPresent)
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        <button onClick={() => { startDetection(true, username) }}>Start detection</button>
        <button onClick={() => { startDetection(false, username) }}>Stop detection</button>
        <Link to="/webcam">
        <button>
          View cam
        </button>
        </Link>
        {this.state.videoPresent && <video autoPlay={true} id='videoElement' width="640" height="480"></video>}
        {!this.state.videoPresent && <video autoPlay={true} id='videoElement' width="0" height="0"></video>}
        <DataVisualisation />
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
      // console.log('weights loaded')
    })
  }


}
