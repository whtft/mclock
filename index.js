const container = document.querySelector('#mclock')
const size = parseInt(getComputedStyle(document.body).getPropertyValue('--size'))

;(() => {
    const digits = { h1: 2, h2: 9, m1: 5, m2: 9, s1: 5, s2: 9 }
    const strips = []

    for (const digit of Object.keys(digits)) {
        const strip = Object.assign(document.createElement('div'), { id: digit, className: 'strip' })
        for (let i = 0; i <= digits[digit]; ++i) {
            strip.append(Object.assign(document.createElement('div'), { className: 'digit', textContent: i }))
        }
        strips.push(strip)
        container.append(strip)
    }

    setInterval(() => {
        const numbers = new Date().toTimeString().substring(0, 8).replaceAll(':', '').split('').map(Number)
        for (let i = 0; i < 6; i++) strips[i].style.translate = `0 -${numbers[i] * size}px`
    }, 1000)
})()
