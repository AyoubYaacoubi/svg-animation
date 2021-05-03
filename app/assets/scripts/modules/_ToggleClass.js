class ToggleClass {
  constructor(classes, elements, triggers, action) {
    // variables and injections here:
    this.classes = classes
    this.elements = elements
    this.triggers = triggers
    this.action = action
    this.events()
  }
  // events here:
  events() {
    for (let i = 0; i < this.triggers.length; i++) {
      this.triggers[i].addEventListener(this.action, () =>
        this.toggleClass(this.elements[i], this.classes[i])
      )
    }
  }
  //functions here:
  toggleClass(el, elClass) {
    el.classList.toggle(elClass)
  }
}

export default ToggleClass
