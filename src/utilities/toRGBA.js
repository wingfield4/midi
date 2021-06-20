//https://gist.github.com/danieliser/b4b24c9f772066bcf0a6
export default (color, opacity) => {
  let hexRegex = /#[a-fA-F0-9]/gm;
  let rgbRegex = /rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)/gm;

  if(color.match(hexRegex)) return convertHex(color, opacity);
  if(color.match(rgbRegex)) return convertRGB(color, opacity);
  console.log('Unable to convert color');
  return color;
}

const convertHex = (color, opacity) => {
  let hex = color.replace('#','');
  let r = parseInt(hex.substring(0,2), 16);
  let g = parseInt(hex.substring(2,4), 16);
  let b = parseInt(hex.substring(4,6), 16);

  let result = `rgba(${r},${g},${b},${opacity})`;
  return result;
}

const convertRGB = (color, opacity) => {
  return `${color.substring(0, color.length - 1)},${opacity})`;
}
