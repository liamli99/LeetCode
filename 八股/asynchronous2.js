const guess = (num) => {
    return new Promise((resolve, reject) => {
        if (num < 10) {
            resolve('Success');
        } else {
            // Note that `throw new Error('Error')` is the same as `reject(new Error('Error'))`!!!
            reject('Error');
        }
    })
}

// Promise

// guess(9)
//     // 'result' is the resolved value and 'error' is the rejected value!
//     .then(result => console.log(result))
//     .catch(error => console.log(error));


// Async/Await

const start = async () => {
    try {
        // 'result' is the resolved value of the Promise
        const result = await guess(10);
        console.log(result);
    // 'error' is the rejected value of the Promise
    } catch (error) {
        console.log(error);
    }
}
start();

