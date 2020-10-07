var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
let readBooks = (time, books) => {
    readBooksPromise(time, books[0]).then((time) => {
        readBooksPromise(time, books[1]).then((time) => {
            readBooksPromise(time, books[2]).then((time) => {
                if (time == 0) {
                    return false;
                }
            }).catch((err) => {
                console.log(err)
            });
        }).catch((err) => {
            console.log(err)
        });
    }).catch((err) => {
        console.log(err)
    });
}

readBooks(10000,books);