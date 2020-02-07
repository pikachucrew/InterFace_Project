import React, { Component } from "react";
import { Link } from "@reach/router";
import * as faceapi from "face-api.js";
import fire from "../config";
import DataVisualisation from "./DataVisualisation";
import * as utils from "../utils/utils";
import gif from "../assets/video-camera.gif"

export default class Dashboard extends Component {
  state = {
    videoPresent: false
  };

  render() {
    const { user } = this.props;
 
return (  
      <div className="dashboard">
        <div className="slide-in font-header buttsContainer flex flex-row w-screen justify-center gains">
        <button
          onClick={() => {
            utils.startDetection(true, user)
             this.setState( {
                videoPresent: true
               }
              );
          }}
          className="dashButts rounded"
        >
          Start detection
        </button>
        <button
          onClick={() => {
            utils.stopStream()
              this.setState({ videoPresent: false });
            }
          }
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
        <button
          onClick={this.logout}
            className="dashButts rounded "
        >
          Log Out
        </button>
          {
            this.state.videoPresent && (
              <div className="recording">
              <img src={gif} className="gif"></img>
              <p className="gifP">Streaming...</p>
              </div>
            )
          }
        </div>
          <video autoPlay={true} id="videoElement" width="0" height="0"></video>
        <DataVisualisation
          user={user}
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
}
