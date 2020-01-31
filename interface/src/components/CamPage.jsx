import React, { Component } from 'react'
import * as faceapi from 'face-api.js'
import { Link } from '@reach/router'
import { startVideo } from '../utils/utils'

export default class CamPage extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>View Camera</h2>
        <div id="container">
          <video autoPlay={true} id="videoElement" width="640" height="480">
          </video>
          <canvas id="canvasElement"></canvas>
        </div>
        <Link to="/dashboard">
          <button onClick={() => {
            startVideo(false)
          }}>
            Return
          </button>
        </Link>
      </div>
    )
  }

  componentDidMount() {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/weights'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/weights'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/weights'),
      faceapi.nets.faceExpressionNet.loadFromUri('/weights')
    ]).then(startVideo(true))
  }
}
