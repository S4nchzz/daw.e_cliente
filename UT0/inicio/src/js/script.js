function x() {
    return "Hola"
}

document.writeln(`<p> ${x()} </p>`)

function z(input) {
    for (let i = 0; i < 5; i++) {
        document.writeln(`<p> ${input} </p>`)
    }
}

z('x')

async function asinc() {
    return "async request"
}

asinc().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log('Error | ' + err)
});

async function dog() {
    const response = await fetch('https://dogapi.dog/api/v2/breeds/036feed0-da8a-42c9-ab9a-57449b530b13')
    const data = await response.json()
    console.log(data.data)
}

dog()

function yol() {
    for (let i = 1; i < 10; i++) {
        for (let k = 1; k < 10; k++) {
            if (k != i) console.log(`(${i},${k})`)  
        }   
    }

    return true
}

yol()

let timesWritten = 0
function butmove() {
    var add = document.getElementById('add')
    var clear = document.getElementById('clear')

    const p = document.getElementById('numberClick')
    add.addEventListener('click', () => { 
        p.textContent = `Number of clicks: ${++timesWritten}`
    }, false)

    clear.addEventListener('click', () => {
        p.textContent = `Number of clicks: ${timesWritten = 0}`
    })
}

butmove()