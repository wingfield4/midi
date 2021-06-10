import { Howl } from 'howler';

const createSound = (path, options) => {
  const sound = new Howl({
    src: [ path ],
    onload: options.onLoad,
    onloaderror: options.onLoadError
  });

  return sound
}

export default createSound;
