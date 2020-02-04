import React, { Component } from "react";
import { Link } from "@reach/router";
import * as faceapi from "face-api.js";
import fire from "../config";
import * as utils from "../utils/utils";

export default class Dashboard extends Component {
  state = {
    videoPresent: false,
  };

  render() {
    const { user } = this.props;
    return (
      <div className="dashboard">
        <div className="flex flex-row w-screen justify-center fixed">
        <button
          onClick={() => {
            utils.startDetection(true, user);
          }}
          className="dashButts rounded"
        >
          Start detection
        </button>
        <button
          onClick={() => {
            utils.stopStream()
          }}
            className="dashButts rounded "
        >
          Stop detection
        </button>
          <Link to="/webcam" className="dashButts rounded ">
            <button>
            View cam
          </button>
        </Link>
        <button
          onClick={this.logout}
            className="dashButts rounded "
        >
          Log Out
        </button>
        </div>
        {this.state.videoPresent && (
          <video
            autoPlay={true}
            id="videoElement"
            width="640"
            height="480"
          ></video>
        )}
        {!this.state.videoPresent && (
          <video autoPlay={true} id="videoElement" width="0" height="0"></video>
        )}
        
      </div>
    );
  }

  componentDidMount() {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/weights"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/weights"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/weights"),
      faceapi.nets.faceExpressionNet.loadFromUri("/weights")
    ]).then(() => {
      console.log("weights loaded");
    });
  }

  logout = e => {
    fire.auth().signOut();
  };
}
