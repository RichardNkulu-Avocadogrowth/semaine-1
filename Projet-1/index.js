// Ecrire une suite de Promise imbriquées

const prom = new Promise((resolve, reject) => {
    setTimeout(() => resolve('1'), 1000)
}).then((result) => {
    console.log(result)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('2'), 1000)
    })
}).then((result) => {
    console.log(result)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('3'), 1000)
    })
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.error(error)
});