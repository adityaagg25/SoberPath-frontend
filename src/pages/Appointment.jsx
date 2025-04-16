import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"To Pace Your Healing Journey, Schedule an Appointment Now"}
        imageURL={"/signin.png"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;