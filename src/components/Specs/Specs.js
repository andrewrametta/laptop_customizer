import React from "react";

import Parts from "../Parts/Parts";

export default function Specs(props) {
  const { features, feature, idx } = props;

  const featureHash = feature + "-" + idx;
  const options = features[feature].map((item, idx) => (
    <Parts key={idx} item={item} {...props} />
  ));

  return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
}
