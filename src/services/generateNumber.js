function generateNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = generateNumber;