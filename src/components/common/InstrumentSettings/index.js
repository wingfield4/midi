import React from 'react';
import styled from 'styled-components';

import InstrumentSelect from '../InstrumentSelect';
import MasterVolumeSlider from '../MasterVolumeSlider';
import Text from '../mui/Text';

const InstrumentSettings = () => {
  return (
    <Container>
      <Text>Instrument Settings:</Text>
      <SettingsContainer>
        <InstrumentSelect />
        <MasterVolumeSlider />
      </SettingsContainer>
    </Container>
  )
}

export default InstrumentSettings;

const Container = styled(({ colors, ...props }) => (
  <div {...props} />
))`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SettingsContainer = styled.div`
  display: flex;
  align-items: center;
  flex=direction: column;
`;
