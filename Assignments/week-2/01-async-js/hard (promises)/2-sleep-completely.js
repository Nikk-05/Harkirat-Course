/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
   return new Promise((resolve)=>{
    let time =Date.now()
    while(Date.now()-time < milliseconds){
        // Sync code to block thread
    }
    resolve()
   })
}

// console.log("Start")
// sleep(10000).then(console.log)
// console.log("End")


module.exports = sleep;
