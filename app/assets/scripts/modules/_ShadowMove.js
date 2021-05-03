class ShadowMove {
  constructor(el, trigger, transformation) {
    // variables and injections here:
    this.trigger = trigger
    this.arrow = el
    this.transformation = transformation
    this.events()
  }
  // events here:
  events() {
    this.trigger.addEventListener("click", () => {
      this.transition()
    })
    this.arrow.addEventListener("transitionend", () => {
      this.afterTransition()
    })
  }
  //functions here:
  afterTransition() {
    this.arrow.style.transition = "none"
    this.arrow.style.transform = "none"
    this.arrow.style.opacity = "1"
  }

  transition() {
    this.arrow.style.transition = "all 300ms ease"
    this.arrow.style.transform = this.transformation
    this.arrow.style.opacity = "0"
  }
}

export default ShadowMove
