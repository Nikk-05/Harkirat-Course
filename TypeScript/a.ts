//   


// // Generics
// // Language independent concept
// type Input = number | string;
// function firstElement(arr: Input[]){
//     return arr[0]
// }

// const value = firstElement(["Nikhil", "Singh"])
// console.log(value)

function getFirstElement<T>(arr:T[]){ 
    return arr[0];
}

const el1 = getFirstElement(['Nikhil','Singh'])
const el2 = getFirstElement([1,2])
const el3 = getFirstElement([true, false])