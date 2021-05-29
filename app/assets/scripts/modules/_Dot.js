import anime from "animejs/lib/anime.es.js"

class Dot {
  constructor() {
    this.dot = document.querySelector(".dot")
    this.dotCntr = document.querySelector(".dot__cntr")
    this.bgCntr = document.querySelector(".grid__svg")
    // this.numOfDots =
    //   (this.bgCntr.clientHeight / this.dot.offsetHeight) *
    //   (this.bgCntr.clientWidth / this.dot.offsetWidth)
    this.numOfDots = 109
    this.cloneDot()
    this.dots = document.querySelectorAll(".dot")

    this.events()
  }
  events() {
    this.dots.forEach((dot, i) => {
      dot.addEventListener("click", (e) => this.stagger(i))
    })
  }

  stagger(index) {
    console.log(index)
    return anime({
      targets: this.dots,
      scale: [
        {value: 0.4, easing: "easeOutSine", duration: 500},
        {value: 1, easing: "easeInOutQuad", duration: 1200},
      ],
      delay: anime.stagger(200, {
        grid: [11, 10],
        from: index,
      }),
    })
  }

  cloneDot() {
    const dotsCount = Math.round(this.numOfDots)
    for (let i = 0; i < dotsCount; i++) {
      let clone = this.dot.cloneNode(true)
      this.dotCntr.appendChild(clone)
    }
  }
}

export default Dot
