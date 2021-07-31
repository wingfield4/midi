const linear = (startValue, endValue, linearValue) => {
  return startValue + (endValue - startValue) * linearValue;
}

export default linear;