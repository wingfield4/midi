import createSound from '../createSound';
import stems from './stems';

const song = {
  isInitialized: false,
  initialize: (inSong, options = {}) => {
    return new Promise((resolve, reject) => {
      const stem = options.stem || stems.FULL;

      song.sound = createSound(inSong[stem], {
        onLoad: () => {
          song.isInitialized = true;
          resolve();
        },
        onLoadError: (id, error) => reject(error)
      });
    })
  },
  sound: null,
  play: () => {
    song.sound.play();
  },
  pause: () => {
    song.sound.pause();
  }
}

export default song;
