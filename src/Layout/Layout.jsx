import { useState } from "react";

import "./Layout.scss";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header
        isSidebarOpen={isSidebarOpen}
        openSidebar={() => {
          setIsSidebarOpen(true);
        }}
      >
        <Nav />
      </Header>
      {isSidebarOpen && (
        <Sidebar
          closeSidebar={() => {
            setIsSidebarOpen(false);
          }}
        >
          <Nav />
        </Sidebar>
      )}
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
