import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmileWink,
  faFaceSmileBeam,
} from "@fortawesome/free-regular-svg-icons";
import "./CSS Files/about.css";
import { BACKEND_URL } from "../config";
import axios from "axios";

function About() {
  const [aboutText, setAboutText] = useState("");
  const [languages, setLanguages] = useState([]);
  const [learnings, setLearnings] = useState([]);

  useEffect(() => {
    axios
      .get(BACKEND_URL + "/about/")
      .then((res) => setAboutText(res.data[0].detail))
      .catch((err) => console.log(err));
    axios
      .get(BACKEND_URL + "/technology/")
      .then((res) => setLanguages(res.data))
      .catch((err) => console.log(err));
    axios
      .get(BACKEND_URL + "/learning/")
      .then((res) => setLearnings(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="about-section" id="About">
      <h1 className="about-title">
        About<span style={{ color: "#FF004F" }}>.</span>
      </h1>
      <div className="section-divider"></div>
      <div className="content-wrapper">
        <div className="about-text">{aboutText}</div>
        <div className="right-section">
          <div className="tools">
            <h1>
              <FontAwesomeIcon
                icon={faFaceSmileWink}
                style={{ color: "#ff005a" }}
              />{" "}
              Languages/Frameworks
            </h1>
            {languages.map((language, index) => (
              <span key={index}>{language.name}</span>
            ))}
            <br />
            <h1>
              <FontAwesomeIcon
                icon={faFaceSmileBeam}
                style={{ color: "#ff005a" }}
              />{" "}
              Learning
            </h1>
            {learnings.map((item, index) => (
              <span key={index}>{item.name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
