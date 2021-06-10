import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Button from './Button';
import Text from './Text';

const Dialog = (props) => {
  return (
    <>
      {props.open &&
        <DialogContainer
          onClick={props.onClose}
        >
          <ContentContainer
            colors={props.colors}
            onClick={e => e.stopPropagation()}
          >
            {props.title && <Title>{props.title}</Title>}
            {props.content}
            {!props.hideActions &&
              <ActionsContainer>
                <Button onClick={props.onClose}>
                  {props.cancelLabel || 'Cancel'}
                </Button>
                {props.onConfirm &&
                  <Button onClick={props.onConfirm}>
                    {props.confirmLabel || 'Confirm'}
                  </Button>
                }
              </ActionsContainer>
            }
          </ContentContainer>
        </DialogContainer>
      }
    </>
  )
}

export default connect(state => ({
  colors: state.colors
}))(Dialog);

const ActionsContainer = styled(({ colors, ...props }) => (
  <div {...props} />
))`
  display: flex;
  justify-content: flex-end;
`;

const ContentContainer = styled(({ colors, ...props }) => (
  <div {...props} />
))`
  flex: 1;
  max-width: 512px;
  background-color: ${props => props.colors.widgetBackground};

  padding: 16px;
  padding-bottom: 8px;

  border-radius: 4px;
  box-shadow: 0px 0px 128px -8px ${props => props.colors.captionText};
`;

const DialogContainer = styled(({ colors, ...props }) => (
  <div {...props} />
))`
  position: fixed;
  right: 0px;
  left: 0px;
  top: 0px;
  bottom: 0px;
  background-color: rgba(0, 0, 0, .54);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  z-index: 1000;
`;

const Title = styled(({ colors, ...props }) => (
  <Text {...props} />
))`
  font-size: 22px;
`;
