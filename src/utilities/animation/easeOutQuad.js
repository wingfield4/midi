const easeOutQuad = (startValue, endValue, linearValue) => {
  return startValue + (endValue - startValue) * (1 - (1 - linearValue) * (1 - linearValue));
}

export default easeOutQuad;