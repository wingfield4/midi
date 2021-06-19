import { createStore, combineReducers } from 'redux';

import colors from './colors';

const DEFAULT_COLOR_MODE = localStorage.getItem('colorMode') || 'dark';

const setColorMode = (state, action) => {
  if(!state) return DEFAULT_COLOR_MODE;

  switch (action.type) {
    case 'setColorMode':
      return action.mode;
    default:
      return state;
  }
}

const setColors = (state, action) => {
  if(!state) return colors[DEFAULT_COLOR_MODE];

  switch (action.type) {
    case 'setColorMode':
      return colors[action.mode];
    default:
      return state;
  }
}

const setNotes = (state, action) => {
  if(!state) return [];

  switch (action.type) {
    case 'setNotes':
      return action.notes;
    case 'addNote':
      return [ ...state, action.note ];
    case 'removeNote':
      return state.filter(note => note.octave !== action.note.octave || note.step !== action.note.step);
    default:
      return state;
  }
}

const setInstrument = (state, action) => {
  if(!state) return 'celticHarp';

  switch (action.type) {
    case 'setInstrument':
      return action.instrument;
    default:
      return state;
  }
}

const setSustain = (state, action) => {
  if(typeof state === 'undefined') return false;

  switch (action.type) {
    case 'setSustain':
      return action.sustain;
    case 'toggleSustain':
      return !state;
    default:
      return state;
  }
}

export default ((initialState) => {
  let rootReducer = combineReducers({
    colorMode: setColorMode,
    colors: setColors,
    notes: setNotes,
    instrument: setInstrument,
    sustain: setSustain
  })

  return createStore(rootReducer, initialState);
})();
