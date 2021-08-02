import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import LightbulbIcon from 'mdi-material-ui/Lightbulb';

import createTimer from '../../utilities/createTimer';

/* 
  using timer here because I plan on doing a bunch of other stuff 
  Kind of overkill as is
*/
const HomeIcon = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = createTimer({
      events: [
        { triggerAt: 2000, onTrigger: () => setActive(true) },
        { triggerAt: 2100, onTrigger: () => setActive(false) },
        { triggerAt: 2200, onTrigger: () => setActive(true) },
        { triggerAt: 5000, onTrigger: () => setActive(false) },
        { triggerAt: 5100, onTrigger: () => setActive(true) },
        { triggerAt: 7000, onTrigger: () => setActive(false) }
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
      <StyledLightbulbIcon
        active={active}
        colors={props.colors}
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

const Container = styled(({ active, colors, ...props }) => (
  <div {...props} />
))`
  margin-top: 32px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const StyledLightbulbIcon = styled(({ active, colors, ...props }) => (
  <LightbulbIcon {...props} />
))`
  animation-direction: alternate;
  ${props => props.active ? `filter: drop-shadow(0px 0px 10px ${props.colors.accent3});` : ''}
  ${props => props.active ? `-webkit-filter: drop-shadow(0px 0px 10px ${props.colors.accent3});` : ''}
`;

