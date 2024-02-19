import state from "./state.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    console.log(state)
}

export function reset() {
    document.documentElement.classList.remove('running')
    state.isRunning = false
}

export function set() {
    console.log("[set]")
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle("music-on")
}