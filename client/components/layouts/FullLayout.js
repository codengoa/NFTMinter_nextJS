import React from 'react';
import Header from "../menu/Header";

function FullLayout() {
    return (
        <div className="Layout">
        <Header />
        <div className="Content">
          {props.children}
        </div>
      </div>
    )
}

export default FullLayout
