import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link as RRLink } from 'react-router-dom';

const Link = ({ dispatch, external, styled, ...props }) => {
  if(external && styled)
    return <StyledExternalLink {...props} />;
  else if(external)
    return <ExternalLink {...props} />;
  else if(!external && styled)
    return <StyledInternalLink {...props} />;
  else
    return <InternalLink {...props} />;
};

const InternalLink = styled(({ color, colors, ...props }) => (
  <RRLink {...props} />
))`
  color: ${props => props.color || props.colors.text};
  text-decoration: none;
`;

const ExternalLink = styled(({ color, colors, to, ...props }) => (
  <a href={to} {...props} />
))`
  color: ${props => props.color || props.colors.text};
  text-decoration: none;
`;

const StyledInternalLink = styled(({ color, colors, to, ...props }) => (
  <RRLink {...props} />
))`
  color: ${props => props.color || props.colors.linkText};
`;

const StyledExternalLink = styled(({ color, colors, to, ...props }) => (
  <a href={to} {...props} />
))`
  color: ${props => props.color || props.colors.linkText};
`;

export default connect(state => ({
  colors: state.colors
}))(Link);