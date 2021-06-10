const findClosest = (list, goal) => {
  return list.reduce((prev, curr) => {
    return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
  });
}

export default findClosest;
