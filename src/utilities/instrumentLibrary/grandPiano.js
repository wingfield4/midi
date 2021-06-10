import createSound from '../createSound';
import findClosest from '../findClosest';

import MEDIUM_PEDAL_24 from '../../assets/sounds/grandPiano/024_ped_mf.wav';
import MEDIUM_PEDAL_31 from '../../assets/sounds/grandPiano/031_ped_mf.wav';
import MEDIUM_PEDAL_35 from '../../assets/sounds/grandPiano/035_ped_mf.wav';
import MEDIUM_PEDAL_38 from '../../assets/sounds/grandPiano/038_ped_mf.wav';
import MEDIUM_PEDAL_42 from '../../assets/sounds/grandPiano/042_ped_mf.wav';
import MEDIUM_PEDAL_45 from '../../assets/sounds/grandPiano/045_ped_mf.wav';
import MEDIUM_PEDAL_50 from '../../assets/sounds/grandPiano/050_ped_mf.wav';
import MEDIUM_PEDAL_54 from '../../assets/sounds/grandPiano/054_ped_mf.wav';
import MEDIUM_PEDAL_58 from '../../assets/sounds/grandPiano/058_ped_mf.wav';
import MEDIUM_PEDAL_60 from '../../assets/sounds/grandPiano/060_ped_mf.wav';
import MEDIUM_PEDAL_64 from '../../assets/sounds/grandPiano/064_ped_mf.wav';
import MEDIUM_PEDAL_65 from '../../assets/sounds/grandPiano/065_ped_mf.wav';
import MEDIUM_PEDAL_68 from '../../assets/sounds/grandPiano/068_ped_mf.wav';
import MEDIUM_PEDAL_70 from '../../assets/sounds/grandPiano/070_ped_mf.wav';
import MEDIUM_PEDAL_72 from '../../assets/sounds/grandPiano/072_ped_mf.wav';
import MEDIUM_PEDAL_77 from '../../assets/sounds/grandPiano/077_ped_mf.wav';
import MEDIUM_PEDAL_86 from '../../assets/sounds/grandPiano/086_ped_mf.wav';
import MEDIUM_PEDAL_90 from '../../assets/sounds/grandPiano/090_ped_mf.wav';
import MEDIUM_PEDAL_95 from '../../assets/sounds/grandPiano/095_ped_mf.wav';
import MEDIUM_PEDAL_99 from '../../assets/sounds/grandPiano/099_ped_mf.wav';
import MEDIUM_PEDAL_101 from '../../assets/sounds/grandPiano/101_ped_mf.wav';

const baseNotes = [24, 31, 35, 38, 42, 45, 50, 54, 58, 60, 64, 65, 68, 70, 72, 77, 86, 90, 95, 99, 101];

const createSounds = async () => {
  const innerCreateSound = (path) => {
    return new Promise((resolve, reject) => {
      let newSound = createSound(path, {
        onLoad: () => resolve(newSound),
        onLoadError: (id, error) => reject(error)
      });
    });
  }

  let newSounds = {
    24: await innerCreateSound(MEDIUM_PEDAL_24),
    31: await innerCreateSound(MEDIUM_PEDAL_31),
    35: await innerCreateSound(MEDIUM_PEDAL_35),
    38: await innerCreateSound(MEDIUM_PEDAL_38),
    42: await innerCreateSound(MEDIUM_PEDAL_42),
    45: await innerCreateSound(MEDIUM_PEDAL_45),
    50: await innerCreateSound(MEDIUM_PEDAL_50),
    54: await innerCreateSound(MEDIUM_PEDAL_54),
    58: await innerCreateSound(MEDIUM_PEDAL_58),
    60: await innerCreateSound(MEDIUM_PEDAL_60),
    64: await innerCreateSound(MEDIUM_PEDAL_64),
    65: await innerCreateSound(MEDIUM_PEDAL_65),
    68: await innerCreateSound(MEDIUM_PEDAL_68),
    70: await innerCreateSound(MEDIUM_PEDAL_70),
    72: await innerCreateSound(MEDIUM_PEDAL_72),
    77: await innerCreateSound(MEDIUM_PEDAL_77),
    86: await innerCreateSound(MEDIUM_PEDAL_86),
    90: await innerCreateSound(MEDIUM_PEDAL_90),
    95: await innerCreateSound(MEDIUM_PEDAL_95),
    99: await innerCreateSound(MEDIUM_PEDAL_99),
    101: await innerCreateSound(MEDIUM_PEDAL_101)
  }

  return newSounds;
}

const grandPiano = {
  sounds: null,
  ids: {},
  playSound: (note) => {
    let closestBaseNote = findClosest(baseNotes, note.midiNote);
    
    let distance = closestBaseNote - note.midiNote;
    let rate = Math.pow(2, (0-distance) / 12);
    let volume = .6*(Math.exp(parseInt(note.velocity)/100)-1)/(Math.E-1);

    let newId = grandPiano.sounds[closestBaseNote].play();

    if(grandPiano.ids[note.midiNote]) {
      grandPiano.ids[note.midiNote].push(newId)
    } else {
      grandPiano.ids[note.midiNote] = [ newId ];
    }

    grandPiano.sounds[closestBaseNote].volume(volume, newId);
    grandPiano.sounds[closestBaseNote].rate(rate, newId);
  },
  stopSound: (note) => {
    let closestBaseNote = findClosest(baseNotes, note.midiNote);
    let ids = grandPiano.ids[note.midiNote];

    ids.forEach(id => {
      let initialVolume = grandPiano.sounds[closestBaseNote].volume(id);
      grandPiano.sounds[closestBaseNote].fade(initialVolume, 0.0, 300, id);
    })

    grandPiano.ids[note.midiNote] = [];
  },
  initialize: () => {
    return new Promise((resolve, reject) => {
      createSounds().then((res) => {
        grandPiano.sounds = res;
        grandPiano.isInitialized = true;
        resolve(res);
      });
    })
  },
  isInitialized: false
}

export default grandPiano;
