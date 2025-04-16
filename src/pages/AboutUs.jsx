import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | SOBERPATH"}
        imageURL={"/about.png"}
      />
      <Biography imageURL={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;