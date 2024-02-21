import * as el from './elements.js'
import state from "./state.js";
import { reset } from "./actions.js"
import { kitchenTimer } from "./sounds.js"

export function countdown() {
    clearTimeout(state.countdownId)

    if(!state.isRunning) {
        return
    }

    let minutes = Number(el.minutesElement.textContent)
    let seconds = Number(el.secondsElement.textContent)

    seconds--

    if(seconds < 0) {
        seconds = 59
        minutes--
    }

    if (minutes < 0) {
        reset()
        kitchenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)

    state.countdownId = setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds
    
    el.minutesElement.textContent = String(minutes).padStart(2, "0")

    el.secondsElement.textContent = String(seconds).padStart(2, "0")
}