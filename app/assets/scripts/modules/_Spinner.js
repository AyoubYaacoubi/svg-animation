import anime from "animejs/lib/anime.es.js"

class Spinner {
  constructor() {
    this.spinners = document.querySelectorAll(".spinner")
    this.runAnimation()
  }

  runAnimation() {
    anime({
      targets: this.spinners,
      rotate: "+=360deg",
      duration: 700,
      loop: true,
      autoplay: true,
      easing: "linear",
    })
  }
}

export default Spinner
