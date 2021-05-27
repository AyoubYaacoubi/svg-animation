import anime from "animejs/lib/anime.es.js"

class Dot {
  constructor() {
    this.dot = document.querySelector(".dot")
    this.dotCntr = document.querySelector(".dot__cntr")
    this.bgCntr = document.querySelector(".grid__svg")
    this.count =
      (this.bgCntr.offsetHeight / this.dot.offsetHeight) *
      (this.bgCntr.offsetWidth / this.dot.offsetWidth)
    console.log(this.count)
    this.cloneDot()
    this.dots = document.querySelectorAll(".dot")
    console.log(this.dots)

    this.events()
  }
  events() {
    this.dots.forEach((dot) => {
      dot.addEventListener("click", () => this.stagger())
    })
  }

  stagger(el) {
    return anime({
      targets: this.dots,
      scale: [
        {value: 0.1, easing: "easeOutSine", duration: 500},
        {value: 1, easing: "easeInOutQuad", duration: 1200},
      ],
      delay: anime.stagger(200, {
        grid: [
          this.bgCntr.offsetHeight / this.dot.offsetHeight,
          this.bgCntr.offsetWidth / this.dot.offsetWidth,
        ],
        from: "center",
      }),
    })
  }

  cloneDot() {
    const dotsCount = Math.round(this.count)
    for (let i = 0; i < dotsCount; i++) {
      let clone = this.dot.cloneNode(true)
      this.dotCntr.appendChild(clone)
    }
  }
}

export default Dot
