import React, { Component } from "react";

export default class Option extends Component {
  render() {
    const { feature, USCurrencyFormat, idx } = this.props;
    const featureHash = feature + "-" + idx;
    const selectedOption = this.props.selected[feature];

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  }
}
