import React, { Component } from "react";
import * as faceapi from "face-api.js";
import { Link, navigate } from "@reach/router";
import * as utils from "../utils/utils";
import comp from '../assets/computer.png'

export default class CamPage extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="w-screen h-screen camPage flex flex-column ">
        <div className="returnButt">
        <Link to="/">
          <button 
            onClick={async () => {
              await utils.stopStream()
              navigate('/')
            }}
          >
           ⏎
          </button>
        </Link>
        </div>
        <div
          id="container"
          className="w-screen h-screen flex flex-col justify-center items-center"
        >
          <img src={comp} alt="" srcset="" className="absolute mt-40 z-10"/>
          <video
            autoPlay={true}
            id="videoElement"
            width="640"
            height="480"
            className="absolute"
          ></video>
          <canvas id="canvasElement" className="absolute"></canvas>
        </div>
      </div>
    );
  }

  componentDidMount() {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/weights"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/weights"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/weights"),
      faceapi.nets.faceExpressionNet.loadFromUri("/weights")
    ]).then(utils.startVideo(true));
  }
}
