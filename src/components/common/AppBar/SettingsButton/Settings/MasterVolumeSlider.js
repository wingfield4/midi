import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Slider from '../../../mui/Slider';
import Text from '../../../mui/Text';

import scaleVolume from '../../../../../utilities/scaleVolume';

const MasterVolumeSlider = (props) => {
  return (
    <Container>
      <Text id="master-volume-slider">Instrument Volume</Text>
      <Slider
        value={props.masterVolume}
        onChange={(e, masterVolume) => props.dispatch({ type: 'setMasterVolume', masterVolume })}
        aria-labelledby="master-volume-slider"
        scale={scaleVolume}
      />
    </Container>
  )
}

export default connect(state => ({
  masterVolume: state.masterVolume
}))(MasterVolumeSlider);

const Container = styled.div`
  margin-top: 16px;
  max-width: 296px;
`;
