import state from "./state.js"
import * as timer from "./timer.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    
    timer.countdown()
}

export function reset() {
    document.documentElement.classList.remove('running')
    state.isRunning = false
    timer.updateDisplay()
}

export function set() {
    console.log("[set]")
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle("music-on")
}