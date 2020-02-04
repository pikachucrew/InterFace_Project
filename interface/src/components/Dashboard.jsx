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
    const { videoPresent } = this.state;
    const { user } = this.props;
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        <button
          onClick={() => {
            utils.startDetection(true, user);
          }}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
        >
          Start detection
        </button>
        <button
          onClick={() => {
            utils.startDetection(false, user);
            utils.refreshPage();
          }}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
        >
          Stop detection
        </button>
        <Link to="/webcam">
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
            View cam
          </button>
        </Link>
        <button
          onClick={this.logout}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
        >
          Log Out
        </button>
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
