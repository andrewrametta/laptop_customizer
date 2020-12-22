import React, { Component } from "react";
import Option from "../Option/Option";
import Total from "../Total/Total";

export default class MainSummary extends Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => (
      <Option key={idx} feature={feature} idx={idx} {...this.props} />
    ));
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <Total {...this.props} />
      </section>
    );
  }
}
