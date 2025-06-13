const container = document.querySelector('#mclock')

let dCons = []
let size = parseInt(getComputedStyle(document.body).getPropertyValue('--size'))

function createClockElements() {
    const digits = {
        h1: [0, 1, 2],
        h2: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        m1: [0, 1, 2, 3, 4, 5],
        m2: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        s1: [0, 1, 2, 3, 4, 5],
        s2: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    }

    for (const digit of Object.keys(digits)) {
        dCons.push(Object.assign(document.createElement('div'), { id: digit, className: 'digitContainer' }))
    }

    for (const dCon of dCons) {
        for (const digit of digits[dCon.id]) {
            const d = Object.assign(document.createElement('div'), { className: 'digit', textContent: digit })
            dCon.append(d)
        }
    }

    container.append(...dCons)
}

function setDconsPos() {
    const numbers = new Date().toTimeString().substring(0, 8).replaceAll(':', '').split('').map(Number)
    for (let i = 0; i < 6; i++) {
        const offset = numbers[i] * size
        dCons[i].style.translate = `0 -${offset}px`
    }
}

createClockElements()
setInterval(setDconsPos, 1000)
