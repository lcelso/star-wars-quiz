import React, { Component } from "react";

const PointsContext = React.createContext([]);

class PointsProvider extends Component {
  state = {
    points: 0,
    choice: '',
    chosen: '',
    error: 0,
    correct: 0
  };

  render() {
    return (
      <PointsContext.Provider value={this.state}>
        {this.props.children}
      </PointsContext.Provider>
    );
  }
}

export const PointsConsumer = PointsContext.Consumer;

export default PointsProvider;
