import React from "react";
import Hero from "../components/Hero.jsx";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Services from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero title={"Welcome to SOBERPATH"} imageURL={"/hero.png"} />
      <Biography imageURL={"/about.png"} />
      <MessageForm />
      <Services />
    </>
  );
};

export default Home;