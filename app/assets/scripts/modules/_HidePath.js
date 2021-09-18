class HidePath {
  constructor(element, trigger, duration = "1000ms", timingFunction = "ease") {
    // variables:
    if (element.length > 1) {
      this.elements = element
    } else {
      let elements = []
      this.elements = elements.concat(element)
    }
    this.trigger = trigger
    this.duration = duration
    this.timingFunction = timingFunction
    this.elements.forEach((el) => {
      this.hidePath(el)
    })
  }

  hidePath(el) {
    el.style.strokeDashoffset = el.getTotalLength()
    el.style.strokeDasharray = el.getTotalLength()
  }
}

export default HidePath
