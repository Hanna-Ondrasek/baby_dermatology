# SkinSnap Baby — Infant Skin Condition Predictor

Live demo: https://baby-dermatology.vercel.app/

SkinSnap Baby is a browser-based application that uses a machine learning image classifier to provide a real-time, webcam-based estimate of common infant skin conditions. The goal is to offer parents and caregivers a fast, accessible, and easy-to-use tool for preliminary assessment of skin issues such as eczema, heat rash, and other dermatologic conditions.

This project runs entirely in the browser and is built using React, webcam capture, and Google’s Teachable Machine.

---

## Live Demo

Try it live:

👉 https://baby-dermatology.vercel.app/

---

## Project Overview

The application works as follows:

1. The user opens the site and enables their webcam  
2. The live camera feed is analyzed in real time by the Teachable Machine model  
3. The model predicts the most likely skin condition from captured frames  
4. The user can ask questions to an AI assistant (Gemini API) to help interpret results

This tool supports early awareness and decision-making, but it is *not* a medical diagnosis.

---

## Features

- Real-time webcam-based skin condition classification  
- Fully client-side inference (no server image uploads)  
- Trained with Google Teachable Machine  
- Simple and accessible UI  
- Gemini API chat assistant for explanation and guidance  
- No installation required

---

## Tech Stack

- React  
- JavaScript / JSX  
- HTML & CSS  
- Teachable Machine model (image classification)  
- Gemini API for AI chat

All processing occurs in the browser for privacy and speed.

---

## How the ML Model Works

- Trained through Google Teachable Machine
- Model classifies webcam images into predefined infant skin condition categories
- Captured frames are continuously fed to the model
- Predictions are displayed to the user in real time

---

## How to Run Locally

1. Clone the repo:

```bash
git clone https://github.com/<your-username>/<your-repo>.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser at:

```
http://localhost:3000
```

Allow webcam access when prompted.

---

## How to Use

1. Open the site or local build  
2. Enable webcam access  
3. Position the infant’s skin area in view of the camera  
4. View model predictions in real time  
5. Ask the built-in AI assistant for help interpreting results

---

## Disclaimer

This tool is for informational and educational purposes only. It does *not* provide medical diagnoses.

Always consult a qualified healthcare professional if:

- Symptoms persist
- Symptoms worsen
- You suspect a serious or urgent condition

---

## Accessibility and Impact

This application is designed to be:

- Easy to use
- Lightweight
- Browser-based (no install)
- Useful in contexts with limited access to clinical resources

---

## Future Improvements

- Expand and diversify the training dataset
- Improve accuracy across skin tones and lighting conditions
- Add more categorized skin conditions
- Enhance mobile responsiveness
- Collaborate with clinicians for model validation
- Add confidence or uncertainty metrics for predictions

---

## Screenshots

<img width="1782" height="1005" alt="image" src="https://github.com/user-attachments/assets/3416fe7e-3cc6-4584-b99c-502024bef6f8" />


## Contact

Developer: Hanna Ondrasek  
Email: ondrasek_hanna@wheatoncollege.edu  
Live Demo: https://baby-dermatology.vercel.app/
