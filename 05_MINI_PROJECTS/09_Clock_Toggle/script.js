const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector("..second")
const timeEl = document.querySelector(".time")
const dateEl = document.querySelector(".date")
const toggle = document.querySelector(".toggle")

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'thursday', 'Friday', 'saturday']
const months = [
    'jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'JUl',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
]

toggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark')
    toggle.textContent = isDark ? 'Light mode' : 'Dark mode'
})

function setTime() {
    const time = new Date()
    const month = time.getmonth()
    const day = time.getday()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'


    const hourDeg = scale(hoursForClock + minutes / 60, 0, 12, 0, 360)
    const minuteDeg = scale(minutes + seconds / 60, 0, 60, 0, 360)
    const secondDeg = scale(seconds, 0, 60, 0, 360)

    hourEl.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg);`

    timeEl.textContent = `${String(hoursForClock || 12).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

function scale(num, inMin, outMin, outMax){
    return ((num - inMin) * (outMax - outMin)) / (inMax- inMin) + outMin
}

setTime()
setInterval(setTime, 1000)