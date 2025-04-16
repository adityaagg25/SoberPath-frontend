import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Services = () => {
    const servicesArray = [
        {
          name: "Detoxification (Detox)",
          imageURL: "/services/detox.png",
        },
        {
          name: "Counselling",
          imageURL: "/services/counselling.png",
        },
        {
          name: "Inpatient Rehabilitation",
          imageURL: "/services/inpatient.jpg",
        },
        {
          name: "Outpatient Rehabilitation",
          imageURL: "/services/outpatient.jpg",
        },
        {
          name: "Holistic Therapies",
          imageURL: "/services/holistic.jpg",
        },
        {
          name: "Medication-Assisted Treatment (MAT)",
          imageURL: "/services/mat.png",
        },
        {
          name: "Psychiatric Evaluation",
          imageURL: "/services/psycho.png",
        },
        {
          name: "Relapse Prevention Programs",
          imageURL: "/services/relapse.png",
        },
    ];

    const responsive = {
        extraLarge: {
          breakpoint: { max: 3000, min: 1324 },
          items: 4,
          slidesToSlide: 1,
        },
        large: {
          breakpoint: { max: 1324, min: 1005 },
          items: 3,
          slidesToSlide: 1,
        },
        medium: {
          breakpoint: { max: 1005, min: 700 },
          items: 2,
          slidesToSlide: 1,
        },
        small: {
          breakpoint: { max: 700, min: 0 },
          items: 1,
          slidesToSlide: 1,
        }
    };

    return (
        <div className="container departments">
            <h2>Our Services</h2>
            <Carousel 
                responsive={responsive} 
                removeArrowOnDeviceType={["small", "medium"]}
                autoPlay={true} 
                autoPlaySpeed={900} // Slide every 3 seconds
                infinite={true} // Loop the slides infinitely
                transitionDuration={500} // Smooth transition duration (500ms)
            >
                {servicesArray.map((service, index) => {
                    return (
                        <div className="card" key={index}>
                            <div className="depart-name">{service.name}</div>
                            <img src={service.imageURL} alt={service.name} />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Services;