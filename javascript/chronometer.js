class Chronometer {
  constructor() {
    
    this.currentTime = 0;
    
    this.intervalId = 0;
  }
  startClick(callback) {
 

    this.intervalId = setInterval(() => {
      this.currentTime++
    },1000)
  };
  getMinutes() {
   
    return Math.floor(this.currentTime / 60)
    
  }
  getSeconds() {
    

    return this.currentTime % 60;

  }
  twoDigitsNumber(value) {
   

    // if (num < 10) {
    //   return '0' + num.toString();
    // } else {
    //   return num.toString();
    // }

    return value < 10 ? "0" + value.toString() : value.toString();

  }
  stopClick() {
    

    clearInterval(this.intervalId);
  }

  resetClick() {

    this.currentTime = 0;
  }

  splitClick() {

    
    return this.twoDigitsNumber(this.getMinutes()) +":"+ this.twoDigitsNumber(this.getSeconds());

  }
}
