// SOAL KE 1
function halo(){
    console.log('Halo Sanbers!')
}
halo();

// SOAL KE 2
function kalikan () {
    return num1 * num2;
}

var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali)

// SOAL KE 3
function introduce () {
    return `Menampilkan "Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${alamat}, dan saya punya hobby yaitu ${hobby}!`;
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)

// SOAL KE 4
function toObject(peserta) {
    var pesertaObject = {};
    for (var i = 0; i < peserta.length; ++i)
        pesertaObject[i] = peserta[i];
    return pesertaObject;
}

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
console.log(toObject(arrayDaftarPeserta));

// SOAL KE 5
function tampilBuah (macamBuah) {
    macamBuah.forEach(function(item, index){
        if (item.no == 1) {
            console.log(item.no);
            console.log(item.nama);
            console.log(item.warna);
            console.log(item.ada_bijinya);
            console.log(item.harga);
        }
    });
}
var macamBuah = [
    {
        no: 1,
        nama: 'strawberry',
        warna: 'merah',
        ada_bijinya: 'tidak',
        harga: 9000
    },
    {
        no: 2,
        nama: 'jeruk',
        warna: 'oranye',
        ada_bijinya: 'ada',
        harga: 8000
    },
    {
        no: 3,
        nama: 'Semangka',
        warna: 'Hijau & Merah',
        ada_bijinya: 'ada',
        harga: 10000
    },
    {
        no: 4,
        nama: 'Pisang',
        warna: 'Kuning',
        ada_bijinya: 'tidak',
        harga: 5000
    }
];
tampilBuah(macamBuah);

// SOAL KE 6
var dataFilm = [];
function tambahData (obj) {
    dataFilm.push(obj)
}
tambahData({nama:'biru film', durasi: '30 menit', genre: '18+', tahun: 2007});
console.log(dataFilm)