import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Dialog from './Dialog';
import Loading from './Loading';

import instrumentLibrary from '../../utilities/instrumentLibrary';

const InitializeInstrumentDialog = (props) => {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(!instrumentLibrary[props.instrument].isInitialize) {
      instrumentLibrary[props.instrument].initialize().then(() => {
        setLoading(false);
      });
    }
  }, [props.instrument])

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      title="Initialized Instrument"
      hideActions={loading}
      content={
        <>
          {loading && <Loading />}
        </>
      }
      onConfirm={() => setOpen(false)}
    />
  )
}

export default connect(state => ({
  instrument: state.instrument
}))(InitializeInstrumentDialog)
