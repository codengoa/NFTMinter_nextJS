import React from 'react';
import Header from "../menu/Header";
import NavBar from "../menu/NavBar/NavBar";

const Layout = (props) => {
  return (
    <div className="Layout">
      <Header />
      <div className="Content">
        {props.children}
      </div>
    </div>
  )
}

export default Layout
