
const calculate = new Promise((resolve, reject) => {
    let result = 300 * 240;
    if(result === true) {
        resolve(result);
    }else{
        reject();
    }
})

calculate.then(() => {
    
})