const easeInCubic = (startValue, endValue, linearValue) => {
  return startValue + (endValue - startValue) * linearValue * linearValue * linearValue;
}

export default easeInCubic;