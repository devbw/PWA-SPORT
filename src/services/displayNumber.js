function displayNumber(minutes, seconds) {

  if(seconds < 10) {
    if(minutes < 10) {
      return minutes = "0" + minutes;
    }
    seconds = "0" + seconds;
  }

  return {minutes, seconds};
}

module.exports = displayNumber;