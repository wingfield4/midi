//works better for negative numbers cause js is weird
const mod = (a, b) => {
  return ((a % b) + b) % b;
}

export default mod
