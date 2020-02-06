import React, { Component } from "react";
import { Link } from "@reach/router";
import * as faceapi from "face-api.js";
import fire from "../config";
import DataVisualisation from "./DataVisualisation";
import * as utils from "../utils/utils";
import {Helmet} from "react-helmet";

export default class Dashboard extends Component {
  state = {
    videoPresent: false,
    startTime: null,
    streaming: false
  };

  render() {
    const { user } = this.props;
    const {streaming} = this.state
    return (
      <div className="dashboard">
        <Helmet><title>Dashboard</title></Helmet>
        <div className="flex flex-row w-screen justify-center fixed">
        <button
          onClick={() => {
            utils.startDetection(true, user);
            this.setState({startTime: Date.now(), streaming: true});
            setTimeout(() => {this.fireAlert()}, 20000 )
          }}
          className="dashButts rounded"
        >
          Start detection
        </button>
        <button
          onClick={() => {
            utils.stopStream()
            this.setState({streaming: false})
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
        <DataVisualisation user={user} checkAlert={this.checkAlert}/>
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

  // componentDidUpdate(prevProps, prevState){
  //   const {streaming} = this.state
  //   if (streaming !== prevState.streaming) {
  //     if (streaming) {const notification = setTimeout(() => {
  //                       alert("hello");
  //                     }, 10000);}
  //     else clearTimeout(notification);
  //   }
  // }

  logout = e => {
    fire.auth().signOut();
  };

  fireAlert = () => {
const {streaming} = this.state;
streaming && alert("hello")
  }

  checkAlert =(arr) =>{
if(arr.length === 0 ){this.setState({streaming:false})}
  }

}
