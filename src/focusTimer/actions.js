import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    
    timer.countdown()

    sounds.buttonPressAudio.play()
}

export function reset() {
    document.documentElement.classList.remove('running')
    state.isRunning = false
    timer.updateDisplay()
}

export function set() {
    el.minutesElement.setAttribute('contenteditable', true)
    el.minutesElement.focus()
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle("music-on")

    if(state.isMute) {
        sounds.bgAudio.play()
        return
    }

    sounds.bgAudio.pause()
}