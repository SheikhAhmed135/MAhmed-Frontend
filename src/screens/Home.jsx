import Typical from "react-typical";
import { slideInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { useInView } from "react-intersection-observer";

import "./Home.scss";
import Background from "../assets/background.jpg";
import useTech from "../hooks/useTech";
import Projects from "../components/Projects"

const styles = {
  slideInLeft: {
    animation: "x 1s",
    animationName: Radium.keyframes(slideInLeft, "slideInLeft"),
  },
};

const Home = () => {
  const technologies = useTech();
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <>
      <div className="home-page">
        {/* Image Container Start */}

        <div className="image-container">
          <img src={Background} alt="Background" width="100%" />
          <div className="animated-text">
            <div className="typical">
              Full Stack Web De
              <Typical
                steps={["veloper.", 1000, "signer.", 1000]}
                loop={Infinity}
                wrapper="b"
              />
            </div>
            <StyleRoot>
              <div className="quote" style={styles.slideInLeft}>
                Design your Imagination.
              </div>
            </StyleRoot>
          </div>
        </div>

        {/* Image Container End */}

        {/* Technologies start */}

        <div className="technologies">
          {technologies.hasLoaded && (
            <>
              <StyleRoot>
                <div className="cards" ref={ref}>
                  {inView && (
                    <>
                      <div className="card-1">Technologies I work with</div>
                      {technologies.state.map((technology, i) => (
                        <div
                          className="card"
                          key={i}
                          style={styles.slideInLeft}
                          content={technology.details}
                        >
                          {technology.name}
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </StyleRoot>
            </>
          )}
        </div>

        {/* Technologies End */}

        <div className="skew-cc"></div>

        {/* Projects Start */}

        <Projects />

        {/* Projects End */}

        <div className="skew-c"></div>
      </div>
    </>
  );
};

export default Home;
