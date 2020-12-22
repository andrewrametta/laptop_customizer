import React from "react";

import Specs from "../Specs/Specs";

export default function MainForm(props) {
  const { features } = props;

  const featureHTML = Object.keys(features).map((feature, idx) => (
    <Specs key={idx} feature={feature} idx={idx} {...props} />
  ));

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {featureHTML}
    </form>
  );
}
