
function EventEmitter() {
  this.commonName = '*'
  this.events = {};
  this.on = function (name, event) {
    if (!this.events[name]) {
      this.events[name] = []
    }
    this.events[name].push(event)
  }
  this.off = function (name, event) {
    if (!event) {
      this.events[name] = []
      return
    }
    if (this.events[name]) {
      this.events[name].forEach((item, index) => {
        if (item === event) {
          this.events[name].splice(index, 1)
        }
      })
    }
  }
  this.trigger = function (name, data) {
    if (name == this.commonName) {
      // 触发全部事件
      Object.keys(this.events).forEach(key => {
        this.events[key].forEach(event => {
          event(data)
        })
      })
    } else {
      // 触发指定事件
      if (this.events[name]) {
        this.events[name].forEach(event => {
          event(data)
        })
      }
      if (this.events[this.commonName]) {
        this.events[this.commonName].forEach(event => {
          event(data)
        })
      }
    }
  }
}


