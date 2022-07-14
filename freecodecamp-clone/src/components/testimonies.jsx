import React from "react";

function Testimonios() {
  return (
    <div className="main-container">
      <img src={require("../images/Emma.png")}alt="Emma Photo" className="testimonies-images" />

      <div className="testimonies-text">
        <h3 className="TitleName">Emma Bostian in Sweden</h3>
        <h3 className="Carrer">Software Engineer at Spotify</h3>
        <p className="description-text">
        "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        </p>
      </div>
    </div>
  );
}

export default Testimonios;