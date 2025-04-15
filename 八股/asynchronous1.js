// setTimeout(() => {
//     console.log('1');
// }, 2000);

// setTimeout(() => {
//     console.log('2');
// }, 2000);

// setTimeout(() => {
//     console.log('3');
// }, 2000);


// Nested Callback

setTimeout(() => {
    console.log('1');
    setTimeout(() => {
        console.log('2');
        setTimeout(() => {
            console.log('3');
        }, 2000);
    }, 2000);
}, 2000);


// Promise

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('1');
        resolve();
    }, 2000);
}).then(() => {
    // 在then中返回Promise，这样才会先执行这个Promise，然后在下一个then中处理！
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2');
            resolve();
        }, 2000);
    });
}).then(() => {
    setTimeout(() => {
        console.log('3');
    }, 2000);
});

// Promise + function

// const send1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('1');
//             resolve();
//         }, 2000);
//     })
// }

// const send2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('2');
//             resolve();
//         }, 2000);
//     })
// }

// const send3 = () => {
//     setTimeout(() => {
//         console.log('2');
//     }, 2000);
// }

// send1()
//     .then(() => send2())
//     .then(send3);

// Async/Await
const send1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('1');
            resolve();
        }, 2000);
    })
}

const send2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2');
            resolve();
        }, 2000);
    })
}

const send3 = () => {
    setTimeout(() => {
        console.log('2');
    }, 2000);
}

const send = async () => {
    try {
        // 'await' is used to wait for a Promise!
        await send1();
        await send2();
        send3();
    } catch (error) {
        console.log(error);
    }
}
send();

