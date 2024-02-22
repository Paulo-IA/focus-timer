import { controls } from "./elements.js"
import * as actions from "./actions.js"
import * as el from "./elements.js"
import state from "./state.js"
import * as timer from "./timer.js"


export function registerControls() {
    controls.addEventListener("click", (event) => {
        const action = event.target.dataset.action

        if (typeof actions[action] != 'function') return

        actions[action]();
    })
}

export function setMinutes() {
    
    el.minutesElement.addEventListener('click', () => {
        if (!state.isRunning) {
            el.minutesElement.setAttribute('contenteditable', true)
            el.minutesElement.focus()
        }
    })


    el.minutesElement.addEventListener('focus', () => {
        el.minutesElement.textContent = ''
    })

    el.minutesElement.onkeypress = (event) => /\d/.test(event.key)

    el.minutesElement.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        timer.updateDisplay()
        el.minutesElement.removeAttribute('contenteditable')
    })
}

export function setSeconds() {
    el.secondsElement.addEventListener('click', () => {
        if (!state.isRunning) {
            el.secondsElement.setAttribute('contenteditable', true)
            el.secondsElement.focus()
        }
    })

    el.secondsElement.addEventListener('focus', () => {
        el.secondsElement.textContent = ''
    })

    el.secondsElement.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 0 : time

        state.seconds = time

        timer.updateDisplay()
        el.secondsElement.removeAttribute('contenteditable')
    })
}