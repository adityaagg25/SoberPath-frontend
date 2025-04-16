import React from "react";

const Hero =({title,imageURL})=>{
    return(
        <div className="hero container">
            <div className="banner">
                <h1>{title}</h1>
                <p><i><b>"Empowering Recovery, One Step at a Time!"</b> </i><br /> <br />
                At SoberPath, we believe that recovery isn’t just about treatment—it’s about support, consistency, and real-time care. Our digital platform is designed to modernize rehabilitation centers with tools that ensure no patient is left behind. <br /> <br />

                Whether it's tracking vital signs, setting up appointments, or sending critical alerts to doctors-SoberPath brings everything into one seamless, intelligent dashboard. <br /> <br />
                <i>Helping patients stay on track, while giving healthcare professionals the insights they need-when they need them most.</i></p>

            </div>
            <div className="banner">
                <img src={imageURL} alt="hero img" className="animated-image"/>
                <span>
                    <img src="/Vector.png" alt="vector" />
                </span>
            </div>
        </div>
    )
}

export default Hero;