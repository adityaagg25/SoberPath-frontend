import React from "react";

const Biography = ({imageURL}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageURL} alt="whoweare" />
        </div>
        <div className="banner">
          {/* <p>Biography</p> */}
          <h3>Who We Are</h3>
          <p>
          We’re a group of innovators, developers, and real-world observers who’ve seen the devastating impact of drug addiction. We’ve also seen the gaps in care and the outdated systems being used in rehabilitation centers. <br /><br />
          <i>SoberPath was born from the desire to bridge that gap.</i></p> <br />
          <i><h6>We Aim:</h6></i>
          <p>We aim to provide an intuitive, real-time monitoring system that benefits both patients and medical staff. With features like instant alerts, automated health logs, and reward-based progress tracking—we’re redefining how recovery is managed.</p>
          <i><h6>Our Mission:</h6></i>
          <p>To digitize rehabilitation care with empathy, precision, and purpose—because recovery deserves more than paper records.</p>
          <i><h6>Our Vision:</h6></i>
          <p>A world where every rehab center is equipped with the tools to monitor, motivate, and transform lives—through data, compassion, and innovation.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;