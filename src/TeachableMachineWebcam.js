import React, { useEffect, useRef, useState } from "react";
import * as tmImage from "@teachablemachine/image";

const TeachableMachineWebcam = () => {
  const URL = "https://teachablemachine.withgoogle.com/models/7AZlb8FQl/";
  const webcamRef = useRef(null);
  const [model, setModel] = useState(null);
  const [maxPredictions, setMaxPredictions] = useState(0);
  const [predictions, setPredictions] = useState([]);

  const init = async () => {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    const loadedModel = await tmImage.load(modelURL, metadataURL);
    setModel(loadedModel);
    setMaxPredictions(loadedModel.getTotalClasses());

    const flip = true;
    const webcam = new tmImage.Webcam(200, 200, flip);
    await webcam.setup();
    await webcam.play();
    webcamRef.current.appendChild(webcam.canvas);

    const loop = async () => {
      webcam.update();
      if (loadedModel) {
        const prediction = await loadedModel.predict(webcam.canvas);
        setPredictions(prediction);
      }
      requestAnimationFrame(loop);
    };

    loop();
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Try our model! Press the 'Start' button to begin.</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={init}
      >
        Start
      </button>
      <div ref={webcamRef} className="mt-4" id="webcam-container"></div>
      <div className="mt-4" id="label-container">
        {predictions.map((p, index) => (
          <div key={index}>
            {p.className}: {p.probability.toFixed(2)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachableMachineWebcam;
