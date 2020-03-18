class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    
    this.intervalId = 0;
  }
  startClick(callback) {
    // ... your code goes here

    this.intervalId = setInterval(() => {
      this.currentTime++
    },1000)
  };
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)
    
  }
  getSeconds() {
    // ... your code goes here

    return this.currentTime % 60;

  }
  twoDigitsNumber(num) {
    // ... your code goes here

    // if (num < 10) {
    //   return '0' + num.toString();
    // } else {
    //   return num.toString();
    // }

    return value < 10 ? "0" + value.toString() : value.toString();

  }
  stopClick() {
    // ... your code goes here

    clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here

    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here

    


  }
}
