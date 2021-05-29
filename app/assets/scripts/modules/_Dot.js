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
    console.log(this.bgCntr.clientHeight.toFixed(0))
    // this.calculateNum(
    //   this.bgCntr.clientHeight.toFixed(0),
    //   this.bgCntr.clientWidth.toFixed(0)
    // )
    this.events()
  }
  events() {
    this.dots.forEach((dot, i) => {
      dot.addEventListener("click", () => this.stagger(i))
    })
  }

  calculateNum(h, w) {
    let rows
    let columns
    if (h % 2 == 0) {
      rows = ((h - 20) / 20).toFixed(0)
    } else {
      rows = ((h - 1 - 20) / 20).toFixed(0)
    }
    if (w % 2 == 0) {
      columns = ((w - 20) / 20).toFixed(0)
    } else {
      columns = ((w - 1 - 20) / 20).toFixed(0)
    }
    this.rows = rows
    this.columns = columns
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
        // grid: [this.rows, this.columns],
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
