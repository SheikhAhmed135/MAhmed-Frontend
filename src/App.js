import { Route } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout/Layout";
import Contact from "./screens/Contact";
import Home from "./screens/Home";

function App() {
  return (
    <Layout>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
    </Layout>
  );
}

export default App;
