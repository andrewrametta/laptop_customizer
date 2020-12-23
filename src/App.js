import React, { Component } from "react";

import MainForm from "./components/MainForm/MainForm";
import FEATURES from "./components/FEATURES/FEATURES";

import "./App.css";
import MainSummary from "./components/MainSummary/MainSummary";

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700,
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200,
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98,
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500,
      },
    },
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <MainForm
            className="main_form"
            USCurrencyFormat={USCurrencyFormat}
            updateFeature={this.updateFeature}
            features={FEATURES}
            {...this.props}
            {...this.state}
          />
          <MainSummary
            className="main_summary"
            USCurrencyFormat={USCurrencyFormat}
            features={FEATURES}
            {...this.props}
            {...this.state}
          />
        </main>
      </div>
    );
  }
}

export default App;
