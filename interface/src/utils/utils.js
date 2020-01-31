import * as faceapi from 'face-api.js'

export const startVideo = (bool) => {
  const video = document.querySelector("#videoElement");
  const canvas = document.querySelector('#canvasElement')
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        if (bool) { video.srcObject = stream; }
        else {
          video.srcObject = null;
        }
      })
      .catch(function (error) {
        console.log("Something went wrong!");
      });
  }

  video.addEventListener('play', () => {

    const displaySize = { width: video.width, height: video.height }
    faceapi.matchDimensions(canvas, displaySize)
    setInterval(async () => {
      const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
      console.log(detections)
      const resizedDetections = faceapi.resizeResults(detections, displaySize)
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
      faceapi.draw.drawDetections(canvas, resizedDetections)
      faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    }, 100)
  })
}

export const startDetection = (bool) => {
  const video = document.querySelector("#videoElement");;

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        if (bool) {video.srcObject = stream;}
        else {
          video.srcObject = null;
          // stream.getTracks().forEach(track => {
          //   console.log(track)
          //   track.stop()
          //   console.log(track.enabled)
          // })}
      }})
      .catch(function (error) {
        console.log("Something went wrong!");
      });
  }
  video.addEventListener('play', () => {
    setInterval(async () => {
      const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
      console.log(detections)
    }, 100)
  })
}

export const stopDetection = () => {
  const stream = navigator.mediaDevices.getUserMedia({ video: true })
  stream.getTracks().forEach(track => {
    track.stop()
  })

}