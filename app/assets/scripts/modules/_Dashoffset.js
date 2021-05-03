class Dashoffset {
  constructor(
    element,
    triger,
    functionToTrigger = "addAnimation",
    action = "click",
    duration = "1000ms",
    timingFunction = "ease",
    resetElOntransitionEnd = false
  ) {
    // variables:
    if (element.length > 1) {
      this.elements = element
    } else {
      let elements = []
      this.elements = elements.concat(element)
    }
    this.triger = triger
    this.functionToTrigger = functionToTrigger
    this.action = action
    this.duration = duration
    this.timingFunction = timingFunction
    this.resetElOntransitionEnd = resetElOntransitionEnd
    // hide the path for one or more than one element.
    this.elements.forEach((el) => {
      this.hidePath(el)
    })
    // trigger the event:
    this.events()
  }

  // events:
  events() {
    this.triger.addEventListener(this.action, () => {
      // add animation:
      if (this.functionToTrigger == "addAnimation") {
        this.elements.forEach((el) => {
          this.addAnimation(el)
        })
      }
      // show the path:
      if (this.functionToTrigger == "showPath") {
        this.elements.forEach((el) => {
          this.showPath(el)
        })
      }
    })
    // show the element on scroll:
    if (this.functionToTrigger == "showOnScroll") {
      window.addEventListener("scroll", () => {
        this.showOnScroll()
      })
    }

    // toggle the transition reset:
    if (this.resetElOntransitionEnd === true) {
      // on the transition end:
      this.elements.forEach((el) => {
        el.addEventListener("transitionend", () => {
          el.style.transition = `none`
          console.log
          this.hidePath(el)
        })
      })
    }
  }

  // methods:
  // show on Scroll:
  showOnScroll() {
    console.log("hello")
  }

  // show the path again:
  showPath(el) {
    el.style.transition = `all ${this.duration} ${this.timingFunction}`

    el.style.strokeDashoffset = 0
    el.style.opacity = 1
  }

  // add animation method:
  addAnimation() {
    this.elements.forEach((el) => {
      el.style.animation = `dashoffset ${this.duration} ${this.timingFunction} infinite both`
    })
  }

  // hidding the element path
  hidePath(el) {
    // el.style.transition = `all ${this.duration} ${this.timingFunction}`

    el.style.strokeDashoffset = el.getTotalLength()
    el.style.strokeDasharray = el.getTotalLength()
    el.style.opacity = 0
  }
}

export default Dashoffset
