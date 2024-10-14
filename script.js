const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")

const updateDebounceText = debounce((text) => {
    debounceText.textContent = text
})

input.addEventListener('input', e => {
    defaultText.textContent = e.target.value
    updateDebounceText(e.target.value)
})

function debounce(cb, delay = 1000) {
    return (...args) => {
        setTimeout(() => {
            cb(...args)
        }, delay)
    }
}