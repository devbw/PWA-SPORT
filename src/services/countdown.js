function decrementSeconds(minutes, seconds) {

  if(seconds <= 0) {
    if(minutes <= 0) {
      return {
        minutes : 0,
        seconds : 0
      };
    }
    seconds = 59;
    minutes--;
  } else {
    seconds--;
  }


  return {minutes, seconds};
}

module.exports = decrementSeconds;