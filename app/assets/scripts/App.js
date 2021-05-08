//                         ----------import chunks:----------
import "../styles/style.css"

// @desc:   hides the svg path inisialy to handle another animation via css.
// vars:    (elements, trigger, duration, timingFunction)
import HidePath from "./modules/_HidePath"

// @descr:   shorten the paht of an svg and lengthen it on a specified action.
// @vars:   ([array of elements or one element], triger, functionToTrigger = "addAnimation", action = "click",
//           duration = "1000ms", timingFunction = "ease", resetElOntransitionEnd = false)
// @funcs:  addAnimation | showPath | showOnScroll??still working on it "preformance"
import Dashoffset from "./modules/_Dashoffset"

// @descr:    fade an element away with a transformation effect (on click).
// @vars:    (element to fade, trigger, "transform "should be percentage" ex:translateX(-50%)")
import ShadowMove from "./modules/_ShadowMove"

// @descr:   clone the svg and add it before the original:
// @vars:   (element to clone - the svg parent element - [array of classes to add] - [array of classes to remove])
import CloneSvg from "./modules/_CloneSvg"

// @descr:   toggle a list of classes for alist of lements on an action on a list of triggers
// @vars:    ([classes], [elements], [triggers], action)
import ToggleClass from "./modules/_ToggleClass"

// accept the module hot if it makes sense.
if (module.hot) {
  module.hot.accept()
}

// arrows - fill:
const elements = document.querySelectorAll(".arrow--fill")
const arrowFillTrigger = document.querySelector(".arrow-cntr")
const arrowFillDuration = "1000ms"
const arrowFillTimingFunction = "ease"
// hide the the paths array
new HidePath(
  elements,
  arrowFillTrigger,
  arrowFillDuration,
  arrowFillTimingFunction
)

// right arrow:
const arrowRightTrigger = document.querySelector(".arrow-right-cntr")
const arrowRightEl = document.querySelector(".arrow__path-right--transition")
new ShadowMove(arrowRightEl, arrowRightTrigger, "translateX(50%)") // must use precentage.

// left arrow:
const arrowLeftTrigger = document.querySelector(".arrow-left-cntr")
const arrowLeftEl = document.querySelector(".arrow__path-left--transition")
new ShadowMove(arrowLeftEl, arrowLeftTrigger, "translateX(-50%)") // must use precentage.

// sign:
const signEl = document.querySelector(".sign")
const signTrigger = document.querySelector(".sign-cntr")
const signSvg = document.querySelector("#sign")

// clone the sign:
new CloneSvg(signEl, signSvg, ["sign--basics", "sign__clone"], ["sign"])
new Dashoffset(signEl, signTrigger, "showPath", "click", "1400ms", "ease", true)

// sun-moon:
const sunTrigger = document.querySelector(".sun-cntr")
const sunEl = document.querySelector(".sun")
// sunTrigger.addEventListener("click", () => {
//   sunEl.classList.toggle("moon")
// })
new ToggleClass(["moon"], [sunEl], [sunTrigger], "click")

// burger menu:
const burger1Trigger = document.querySelector(".burger-menu__cntr")
const burger1El = document.querySelector(".burger-menu")
new ToggleClass(["burger-menu--active"], [burger1El], [burger1Trigger], "click")
