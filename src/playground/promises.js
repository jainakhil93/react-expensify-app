const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('this is my changed data')
        reject('something went wrong!')
    }, 5000)
})
console.log('before')
promise.then((data) => {
    console.log('1', data)
}).catch((error) => {
    alert(error)
})

console.log('after')