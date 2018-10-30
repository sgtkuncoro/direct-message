import React, { Component } from "react";

import Layout from "./Components/Layout/Layout";
import DirectMessage from "./Containers/DirectMessage/DirectMessage";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <DirectMessage />
        </Layout>
      </div>
    );
  }
}

export default App;
