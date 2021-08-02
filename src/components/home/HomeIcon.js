import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import LightbulbIcon from 'mdi-material-ui/Lightbulb';

import createTimer from '../../utilities/createTimer';

/* 
  using timer here because I plan on doing a bunch of other stuff 
  Kind of overkill/weird fit as is
*/
const HomeIcon = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = createTimer({
      events: [
        { triggerAt: 2000, onTrigger: () => setActive(true) },
        { triggerAt: 4000, onTrigger: () => setActive(false) },
        { triggerAt: 6000, onTrigger: () => setActive(true) },
        { triggerAt: 6666, onTrigger: () => setActive(false) },
        { triggerAt: 6888, onTrigger: () => setActive(true) },
        { triggerAt: 9000, onTrigger: () => setActive(false) }
      ],
      repeat: true
    });
    timer.start();

    return () => {
      timer.stop();
    }
  }, []);

  return (
    <Container>
      <LightbulbIcon
        style={{
          fontSize: 128,
          color: active ? props.colors.accent3 : props.colors.captionText
        }}
      />
    </Container>
  )
}

export default connect(state => ({
  colors: state.colors
}))(HomeIcon);

const Container = styled(({ colors, ...props }) => (
  <div {...props} />
))`
  margin-top: 32px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
