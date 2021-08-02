import { createStore, combineReducers } from 'redux';

import colors from './colors';
import instruments from './instruments';
import instrumentLibrary from './instrumentLibrary';

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

const setLastNote = (state, action) => {
  if(typeof state === 'undefined') return null;

  switch (action.type) {
    case 'addNote':
      console.log('addingNote', action.note);
      return action.note;
    default:
      return state;
  }
}

const setInstrument = (state, action) => {
  if(!state)
    return instruments.GRAND_PIANO;

  switch (action.type) {
    case 'setInstrument':
      instrumentLibrary.isInitialized = false;
      return action.instrument;
    default:
      return state;
  }
}

const setSustain = (state, action) => {
  if(typeof state === 'undefined')
    return false;

  switch (action.type) {
    case 'setSustain':
      return action.sustain;
    case 'toggleSustain':
      return !state;
    default:
      return state;
  }
}

const setChord = (state, action) => {
  if(typeof state === 'undefined')
    return null;

  switch (action.type) {
    case 'setChord':
      return action.chord;
    default:
      return state;
  }
}

const setMasterVolume = (state, action) => {
  if(typeof state === 'undefined')
    return 100;

  switch (action.type) {
    case 'setMasterVolume':
      return action.masterVolume;
    default:
      return state;
  }
}

export default ((initialState) => {
  let rootReducer = combineReducers({
    colorMode: setColorMode,
    colors: setColors,
    notes: setNotes,
    lastNote: setLastNote,
    instrument: setInstrument,
    sustain: setSustain,
    chord: setChord,
    masterVolume: setMasterVolume
  })

  return createStore(rootReducer, initialState);
})();
