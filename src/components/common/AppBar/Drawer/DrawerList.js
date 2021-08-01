import React from 'react';
import { connect } from 'react-redux';

import EarHearingIcon from 'mdi-material-ui/EarHearing';
import HelpCircleOutlineIcon from 'mdi-material-ui/HelpCircleOutline';
import InformationOutlineIcon from 'mdi-material-ui/InformationOutline'
import MusicIcon from 'mdi-material-ui/Music';
import PianoIcon from 'mdi-material-ui/Piano';
import SchoolIcon from 'mdi-material-ui/School';

import Divider from '../../Divider';
import Link from '../../Link';
import ListItem from '../../mui/ListItem';
import ListItemIcon from '../../mui/ListItemIcon';
import ListItemText from '../../mui/ListItemText';

const DrawerList = (props) => {
  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Link to={item.to}>
            <ListItem button onClick={props.onClose}>
              <ListItemIcon>
                {item.Icon && <item.Icon style={{ color: props.colors.captionText }} />}
              </ListItemIcon>
              <ListItemText>
                {item.title}
              </ListItemText>
            </ListItem>
          </Link>
          {item.endOfSection && <Divider />}
        </React.Fragment>
      ))}
    </>
  )
}

export default connect(state => ({
  colors: state.colors
}))(DrawerList);

const items = [
  {
    title: 'Just Play',
    Icon: PianoIcon,
    to: '/play'
  },
  {
    title: 'Learn Chords',
    Icon: SchoolIcon,
    to: '/learnChords'
  },
  {
    title: 'Train Your Ear',
    Icon: EarHearingIcon,
    to: 'earTraining'
  },
  {
    title: 'Play Along',
    Icon: MusicIcon,
    to: 'playAlong',
    endOfSection: true
  },

  {
    title: 'About Keyluminate',
    Icon: InformationOutlineIcon,
    to: 'about'
  },
  {
    title: 'How To Use Keyluminate',
    Icon: HelpCircleOutlineIcon,
    to: 'howTo'
  }
]
