// SOAL KE 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(`${kataPertama} ${kataKedua} ${kataKetiga} ${kataKeempat}`);

// SOAL KE 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

console.log((parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat)));

// SOAL KE 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua   = kalimat.substring(5, 10); // do your own! 
var kataKetiga  = kalimat.substring(12, 14); // do your own! 
var kataKeempat = kalimat.substring(16, 20); // do your own! 
var kataKelima  = kalimat.substring(21, 26); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// SOAL KE 4
var nilai = 80;

if (nilai >= 80) {
    console.log('indeksnya A')
} else if (nilai >= 70 && nilai < 70) {
    console.log('indeksnya c')
} else if (nilai >= 50 && nilai < 60) {
    console.log('indeksnya D')
} else if (nilai < 50) {
    console.log('indeksnya E')
}

// SOAL KE 5
var tanggal = 5;
var bulan   = 0;
var tahun   = 1992;
const date    = new Date(Date.UTC(tahun, bulan, tanggal));
const options = { year: 'numeric', month: 'long', day: 'numeric' };

console.log(date.toLocaleDateString('id-ID', options));