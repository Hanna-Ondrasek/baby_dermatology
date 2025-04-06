import React, { useRef, useState } from "react";
import * as tmImage from "@teachablemachine/image";
import './button.css';

const TeachableMachineWebcam = () => {
  const URL = "https://teachablemachine.withgoogle.com/models/7AZlb8FQl/";
  const webcamRef = useRef(null);
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [expanded, setExpanded] = useState(null); // for condition info

  // Explanations for each condition
  const conditionInfo = {
    "Heat Rash": "A common rash caused by blocked sweat glands. Usually resolves on its own.",
    "Eczema": "A chronic skin condition that causes dryness, itching, and redness.",
    "Sepsis": "A potentially life-threatening condition caused by the body’s response to infection. Requires urgent medical attention.",
    "Meningitis": "Inflammation of membranes around the brain/spinal cord. Can be serious — consult a doctor immediately if suspected.",
    "Other Skin Condition": "The rash may not fit any trained category. Please monitor symptoms or consult a pediatrician."
  };

  const init = async () => {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    const loadedModel = await tmImage.load(modelURL, metadataURL);
    setModel(loadedModel);

    const flip = true;
    const webcam = new tmImage.Webcam(400, 400, flip);
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

  const highestPrediction = predictions.reduce(
    (max, p) => (p.probability > max.probability ? p : max),
    { probability: 0 }
  );

  return (
    <div className="flex flex-col items-center">
      <h1>Try our model! Press the 'Start' button to begin.</h1>

      <button className="button-17" role="button" onClick={init}>
        Start!
      </button>

      <div ref={webcamRef} className="mt-4" id="webcam-container"></div>

      {predictions.length > 0 && (
        <div className="progress-container">
          {predictions.map((p, index) => {
            let colorClass = "green";
            if (p.probability < 0.6) colorClass = "yellow";
            if (p.probability < 0.3) colorClass = "red";

            return (
              <div key={index} className="progress-bar-wrapper">
                <div className="progress-label">
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                    onClick={() =>
                      setExpanded(expanded === p.className ? null : p.className)
                    }
                  >
                    {p.className}
                  </span>
                  <span>{(p.probability * 100).toFixed(1)}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className={`progress-fill ${colorClass}`}
                    style={{ width: `${p.probability * 100}%` }}
                  ></div>
                </div>

                {expanded === p.className && (
                  <div className="info-box">
                    {conditionInfo[p.className] || "No additional information."}
                  </div>
                )}
              </div>
            );
          })}

          {/* Advice Box */}
          <div className="advice-box">
            {highestPrediction.probability > 0.6 ? (
              <p>
                <strong>Recommendation:</strong> This result is high-confidence.
                Please consult a pediatrician to confirm the diagnosis.
              </p>
            ) : (
              <p>
                <strong>Note:</strong> Confidence is low. Try again with more
                lighting or a clearer view of the skin.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeachableMachineWebcam;
