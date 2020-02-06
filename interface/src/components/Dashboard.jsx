import React, { Component } from "react";
import { Link } from "@reach/router";
import * as faceapi from "face-api.js";
import fire from "../config";
import DataVisualisation from "./DataVisualisation";
import * as utils from "../utils/utils";
import { Helmet } from "react-helmet";
import gif from "../assets/video-camera.gif"

export default class Dashboard extends Component {
  state = {
    videoPresent: false,
    showAlert: false,
    streaming: false
  };

  render() {
    const { user } = this.props;
 const { 
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
        <div className="slide-in font-header buttsContainer flex flex-row w-screen justify-center gains">
        <button
          onClick={() => {
            utils.startDetection(true, user)
            this.stateSwitch()
             this.setState( {
                streaming: true,
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
              this.setState({ streaming: false, showAlert: false, videoPresent: false });
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
