import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="link">
        <Link to="/">Home</Link>
      </div>
      <div className="link">
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
};

export default Nav;
