import React from "react";
import myPic from "../../public/images/my-photoes/chetu.jpeg";
import resume from "../../public/Resume (2).pdf";

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Chetna Kanak</span>
          </h1>
          <h2>Frontend Developer</h2>
          <p>
            I'm Chetna, a passionate Frontend Developer who loves turning
            creative designs into responsive websites. I enjoy building
            user-friendly interfaces and continuously learning new technologies
            to improve my skills.
          </p>
          <a
            href={resume}
            download
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            <i className="fas fa-download mr-2"></i> Download CV
          </a>
        </div>

        <div className="hero-image">
          <img src={myPic} alt="chetna's photo" />
        </div>
      </div>
    </section>
  );
}

export default Home;
