// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
];
 
// Tulis code untuk memanggil function readBooks di sini
readBooks(10000, books[0], (time) => {
    readBooks(time, books[1], (time) => {
        readBooks(time, books[2], (time) => {
            readBooks(time, books[3], (time) => {
                // 
            })
        });
    });
});