const scaleVolume = (value) => { //value is 1-100 (or slightly higher in some cases)
  return (Math.exp(value/100)-1)/(Math.E-1)
}

export default scaleVolume;
