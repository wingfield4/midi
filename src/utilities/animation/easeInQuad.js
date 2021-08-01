const easeInQuad = (startValue, endValue, linearValue) => {
  return startValue + (endValue - startValue) * linearValue * linearValue;
}

export default easeInQuad;