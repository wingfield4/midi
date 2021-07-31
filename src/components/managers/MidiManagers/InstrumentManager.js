import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Loading from '../../common/Loading';
import Text from '../../common/mui/Text';

import instrumentLibrary from '../../../utilities/instrumentLibrary';

const InitializeInstrumentDialog = (props) => {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setOpen(true);
    setLoading(true);
    instrumentLibrary.initialize(props.instrument).then(() => {
      setLoading(false);
      setTimeout(() => {
        setOpen(false);
      }, 1000)
    });
  }, [props.instrument])

  return (
    <>
      {open &&
        <Container>
          {loading && <Text color="#FFF" fontSize={24}>Initializing Instrument</Text>}
          {loading && <Loading />}
          {!loading && <Text color="#FFF" fontSize={24} style={{ marginBottom: 48 }}>Done!</Text>}
        </Container>
      }
    </>
  )
}

export default connect(state => ({
  instrument: state.instrument
}))(InitializeInstrumentDialog)

const Container = styled(({ colors, ...props }) => (
  <div {...props} />
))`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 10000;
  background-color: rgba(0, 0, 0, .54);
`;