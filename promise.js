function getDoubleUsingPromise(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number !== 'number') {
                reject(new Error('O argumento não é um número.'));
            } else {resolve(number * 2);
            }
        }, 1000); 
    });
}

getDoubleUsingPromise(5)
    .then(result => {
        console.log('O dobro do número é:', result);
    })
    .catch(error => {
        console.error('Erro:', error.message);
    });


// com await
// async function getDoubleUsingAsyncAwait(number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof number !== 'number') {
//                 reject(new Error('O argumento não é um número.'));
//             } else {
//                 resolve(number * 2);
//             }
//         }, 1000); 
//     });
// }

// async function main() {
//     try {
//         const result = await getDoubleUsingAsyncAwait(5);
//         console.log('O dobro do número é:', result);
//     } catch (error) {
//         console.error('Erro:', error.message);
//     }
// }

// main();

