const waitBeforeResolve = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World") 
    }, 1000)
}).then((result) => {
    console.log(result)
})
