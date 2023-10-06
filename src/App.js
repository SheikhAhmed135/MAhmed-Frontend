import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout/Layout";
import Contact from "./screens/Contact";
import Home from "./screens/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
