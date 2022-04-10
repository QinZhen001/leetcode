class Timer {
  constructor(num) {
    this.num = num;
    this.timer = null;
    this.hasStarted = false;
  }
  start() {
    if (this.hasStarted) {
      return;
    }
    this.hasStarted = true;
    if (this.timer) {
      // 处理pause之后再start
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => {
      if (this.num < 0 || !this.hasStarted) {
        return;
      }
      console.log(this.num);
      this.num--;
    }, 1000);
  }
  pause() {
    if (!this.hasStarted) {
      return;
    }
    this.hasStarted = false;
  }
  cancel() {
    if (!this.hasStarted) {
      return;
    }
    this.hasStarted = false;
    this.num = 0
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}


