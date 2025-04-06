// App.js
import React from "react";
import TeachableMachineWebcam from "./TeachableMachineWebcam";


function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div class="header">
  <a href="#default" class="logo"> 🩺 SkinSnap Baby  </a>
  <div class="header-right">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div>
            <FadeInSection>
            <div class="text-box-title">
              <h1>Infant Skin Condition Predictor</h1>
              <p>Introducing a new way to assess infant skin conditions—get a quick,
                 webcam-based estimate of rash type in seconds.
              </p>
            </div>
            <div class="text-box">
            
            

              <h1>What is the purpose of this project?</h1>
              <h3>Every second counts when it comes to infant health. 
            Our project leverages Google's Teachable Machine AI to offer a real-time, 
            webcam-based diagnostic tool that helps identify common baby rashes and skin 
            conditions. With just a simple live feed, parents and caregivers can receive 
            predictions on whether a rash may be eczema, sepsis, meningitis, heat rash, 
            or another dermatologic condition—empowering them to make informed decisions faster.</h3>


            
            
              <h1>Powered by Machine Learning</h1>
              <h3>We trained our model using Google's Teachable Machine, enabling rapid 
            development of an image classification system without the need for complex backend 
            code. The model was taught to recognize visual patterns and distinctions between 
            several confirmed infant skin conditions. Once the user activates the webcam, the model 
            analyzes the incoming image and outputs a likely diagnosis based on its training.</h3>
              </div>
              

                <div class="text-box">
                <h1>Tech Stack</h1>
<h3>This project is built with:</h3>

<li>React for a responsive, interactive user experience</li>

<li>HTML and CSS for page structure and styling</li>

<li>Google Teachable Machine for creating and deploying the machine learning model</li>


<h3>The application runs entirely in-browser, requiring no installations, 
making it lightweight and widely accessible.</h3>
                </div>

<div class="text-box">
                <h1>What Sets This Apart</h1>
<h3>AI tools have previously been used in pediatric care, such as detecting 
elevated bilirubin levels through smartphone cameras. However, our model expands 
on this concept by supporting classification across multiple distinct skin conditions. 
Unlike clinical-only applications, this model is publicly accessible and user-friendly, 
making it useful for both early detection and parental peace of mind.</h3>

<h1>Future Goals</h1>
<h3>To improve the model’s reliability and reach, we plan to:</h3>

<li>Continue expanding and diversifying the dataset to improve accuracy across skin tones and lighting conditions
</li>

<li>Add even more common skin conditions that affect infants and toddlers</li>

<li>Optimize the tool for mobile devices to ensure usability on the go</li>

<li>Seek collaboration with medical professionals to validate and refine the model's performance</li>


<h1>Accessibility and Impact</h1>
<h3>This tool is designed with accessibility in mind. In areas where healthcare 
is limited or delayed, it can provide an initial point of insight for concerned parents. 
While not a substitute for medical expertise, it can support timely decision-making and 
help prioritize professional evaluation when needed.</h3>
</div>

<div class="text-box">
<h1>Disclaimer</h1>
<p>This tool is intended for informational purposes only and does not provide medical 
diagnoses. Always consult with a qualified 
healthcare provider if you suspect a serious condition or if symptoms persist.</p>
</div>
                <div class="text-box">
      <TeachableMachineWebcam />
      </div>

      <div class="text-box">
        <h1>Contact</h1>
        <h2>Developer of the website: Hanna Ondrasek  <a href="mailto:ondrasek_hanna@wheatoncollege.edu">ondrasek_hanna@wheatoncollege.edu</a></h2>
      </div>
      
      </FadeInSection>
    </div>
  );
}

export default App;
