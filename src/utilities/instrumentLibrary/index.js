import celticHarp from './celticHarp';
import grandPiano from './grandPiano';

import createSound from '../createSound';
import findClosest from '../findClosest';

const library = {
  celticHarp,
  grandPiano
}

const createSounds = async (newInstrument) => {
  const innerCreateSound = (path) => {
    return new Promise((resolve, reject) => {
      let newSound = createSound(path, {
        onLoad: () => resolve(newSound),
        onLoadError: (id, error) => reject(error)
      });
    });
  }

  let newSounds = {};
  let baseNotes = Object.keys(library[newInstrument]);
  for(let i = 0; i < baseNotes.length; i++) {
    let baseNote = baseNotes[i];
    newSounds[baseNote] = await innerCreateSound(library[newInstrument][baseNote]);
  }

  return newSounds;
}

const instrument = {
  initialize: (newInstrument) => {
    return new Promise((resolve, reject) => {
      if(instrument.currentInstrument === newInstrument) {
        resolve();
      } else {
        instrument.sound = null;
        instrument.currentInstrument = null;
        instrument.isInitialized = false;
        instrument.ids = {};
        createSounds(newInstrument).then((res) => {
          instrument.currentInstrument = newInstrument;
          instrument.sounds = res;
          instrument.isInitialized = true;
          resolve(res);
        });
      }
    })
  },
  isInitialized: false,
  currentInstrument: null,

  sounds: null,
  ids: {},
  playSound: (note) => {
    let baseNotes = Object.keys(library[instrument.currentInstrument]);
    let closestBaseNote = findClosest(baseNotes, note.midiNote);
    
    let distance = closestBaseNote - note.midiNote;
    let rate = Math.pow(2, (0-distance) / 12);
    let volume = .8*(Math.exp(parseInt(note.velocity)/100)-1)/(Math.E-1);

    let newId = instrument.sounds[closestBaseNote].play();

    if(instrument.ids[note.midiNote]) {
      instrument.ids[note.midiNote].push(newId)
    } else {
      instrument.ids[note.midiNote] = [ newId ];
    }

    instrument.sounds[closestBaseNote].volume(volume, newId);
    instrument.sounds[closestBaseNote].rate(rate, newId);
  },
  stopSound: (note) => {
    let baseNotes = Object.keys(library[instrument.currentInstrument]);
    let closestBaseNote = findClosest(baseNotes, note.midiNote);
    let ids = instrument.ids[note.midiNote];

    ids.forEach(id => {
      let initialVolume = instrument.sounds[closestBaseNote].volume(id);
      instrument.sounds[closestBaseNote].fade(initialVolume, 0.0, 300, id);
    })

    instrument.ids[note.midiNote] = [];
  },
}

export default instrument;
