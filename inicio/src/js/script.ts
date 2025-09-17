function x() {
    return "Hola"
}

document.writeln(`<p> ${x()} </p>`)

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

function yol(): boolean {
    for (let i = 1; i < 10; i++) {
        for (let k = 1; k < 10; k++) {
            if (k != i) console.log(`(${i},${k})`)  
        }   
    }

    return true
}

yol()