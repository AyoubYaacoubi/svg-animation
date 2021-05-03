class CloneSvg {
  constructor(element, parentEl, addClasses, removeClasse) {
    // variables and injections here:
    this.element = element
    this.parentEl = parentEl
    // dealing with the classes:
    let addClassesArray = []
    let removeClassesArray = []
    this.addClasses = addClassesArray.concat(addClasses)
    this.removeClasses = removeClassesArray.concat(removeClasse)
    this.clonseElment()
  }
  //functions here:
  clonseElment() {
    const clone = this.element.cloneNode(true)
    for (let i = 0; i < this.addClasses.length; i++) {
      clone.classList.add(this.addClasses[i])
    }
    for (let i = 0; i < this.removeClasses.length; i++) {
      clone.classList.remove(this.removeClasses[i])
    }
    this.parentEl.insertBefore(clone, this.element)
  }
}

export default CloneSvg
