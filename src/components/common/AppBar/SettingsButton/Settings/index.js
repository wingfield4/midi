import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ColorModeSelect from './ColorModeSelect';
import Divider from '../../../Divider';
import InstrumentSelect from './InstrumentSelect';
import MasterVolumeSlider from './MasterVolumeSlider';
import Text from '../../../mui/Text';

const Settings = (props) => {
  return (
    <>
      <SectionTitle>Site Settings</SectionTitle>
      <ColorModeSelect />
      <Divider />
      <SectionTitle>Instrument Settings</SectionTitle>
      <InstrumentSelect fullWidth />
      <MasterVolumeSlider />
    </>
  )
}

export default connect(state => ({
  colors: state.colors
}))(Settings);

const SectionTitle = styled(({ colors, ...props }) => (
  <Text {...props} />
))`
  && {
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 18px;
  }
`;
