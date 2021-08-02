import React from 'react';
import styled from 'styled-components';

import HomeLink from './HomeLink';

const HomeLinks = () => {
  return (
    <Container>
      {links.map((link, index) => (
        <HomeLink {...link} key={index} />
      ))}
    </Container>
  )
}

export default HomeLinks;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin-top: 40px;
`;

const links = [
  {
    label: 'Just Play',
    to: '/play',
    description: `
      Play our virtual piano using either your 
      computer keyboard or a connected MIDI device.
      Choose from many different keyboard sounds!
    `
  },
  {
    label: 'Learn Chords',
    to: '/learnChords',
    description: `
      Learn chord patterns on the piano.
      Play and practice, receiving instant feedback
      on how you're doing.
    `
  },
  {
    label: 'Play Along',
    to: '/playAlong',
    description: `
      Play along with our library of great music.
      Play accurately and precisely to build up a 
      personal best score!
    `
  },
  {
    label: 'Train Your Ear',
    to: '/earTraining',
    description: `
      Learn to play-by-ear as you listen closely 
      and replay the chords or melody that you hear. 
      Great for all learning levels!
    `
  },
]
