import React, { Component } from "react";
import { Link } from "@reach/router";
import * as faceapi from "face-api.js";
import fire from "../config";
import DataVisualisation from "./DataVisualisation";
import * as utils from "../utils/utils";
import { Helmet } from "react-helmet";

export default class Dashboard extends Component {
  state = {
    videoPresent: false,
    // startTime: null,
    showAlert: false,
    streaming: false
  };

  render() {
    const { user } = this.props;
    const { 
      // startTime, 
      showAlert, 
      streaming } = this.state;
    return (
      <div className="dashboard">
        {showAlert && (
          <div>
            {" "}
            <Helmet>
              <title>!Notification</title>
            </Helmet>
            <p>You've been active for aaages. Break?</p>
          </div>
        )}
        <div className="flex flex-row w-screen justify-center fixed">
          <button
            onClick={() => {
              utils.startDetection(true, user);
              this.setState({
                // startTime: Date.now(),
                streaming: true
              });
            }}
            className="dashButts rounded"
          >
            Start detection
          </button>
          <button
            onClick={() => {
              utils.stopStream();
              this.setState({ streaming: false, showAlert: false });
            }}
            className="dashButts rounded "
          >
            Stop detection
          </button>
          <Link to="/webcam" className="dashButts rounded ">
            <button>View cam</button>
          </Link>
          <button onClick={this.logout} className="dashButts rounded ">
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
        <DataVisualisation
          user={user}
          // startTime={startTime}
          alertOn={this.alertOn}
          streaming={streaming}
          alertOff={this.alertOff}
        />
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

  alertOn = () => {
    this.setState({ showAlert: true });
  };

  alertOff = () => {
    this.setState({ showAlert: false });
  };
}
