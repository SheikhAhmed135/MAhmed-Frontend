import { Link } from "react-router-dom";
import Radium, { StyleRoot } from "radium";
import { fadeInRightBig } from "react-animations";

const styles = {
  fadeInRightBig: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInRightBig, "fadeInRightBig"),
  },
};

const Header = ({ children, isSidebarOpen, openSidebar }) => {
  return (
    <header className="main-header">
      <div className="header-wrapper">
        <div className="site-name">
          <Link to="/">Muhammad Ahmed</Link>
        </div>
        <StyleRoot>
          <div className="site-nav" style={styles.fadeInRightBig}>
            {children}
          </div>
        </StyleRoot>
      </div>
      {!isSidebarOpen && (
        <div
          className="open-sidebar"
          onClick={() => {
            openSidebar();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#fff"
            className="bi bi-justify line-svg"
            viewBox="0 0 12 12"
          >
            <path
              fillRule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      )}
    </header>
  );
};

export default Header;
