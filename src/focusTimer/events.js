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