import React, { Component } from 'react';

import MuiSlider from '@material-ui/core/Slider';

class Slider extends Component {
  render() {
    return (
      <MuiSlider {...this.props} />
    )
  }
}

export default Slider;
