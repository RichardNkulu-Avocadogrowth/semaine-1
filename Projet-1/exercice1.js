const arrayToObject = () => {
    const result = {}
    for (const obj of myArray) {
        result[obj.id] = obj;
    }
    return result;
}

const myArray = [
    { id: 1, name: "Pierre"},
    { id: 2, name: "Richard"}
]

const myObject = arrayToObject(myArray);
console.log(myObject);