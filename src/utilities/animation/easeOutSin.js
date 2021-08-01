const easeOutSin = (startValue, endValue, linearValue) => {
  return startValue + (endValue - startValue) * Math.sin((linearValue * Math.PI) / 2);
}

export default easeOutSin;