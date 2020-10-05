// SOAL KE 1
const luasLingkaran = () => {
    let jari2 = parseFloat(12);
    if (isNaN(jari2)) {
      jari2 = 0.0;
    }
    const hasil = 3.14 * jari2 * jari2;
    console.log(hasil)
}
luasLingkaran();

const kelilingLingkaran = () => {
    let jari2 = 14;
    if (isNaN(jari2)) {
      jari2 = 0.0;
    }
    const hasil = 22/7 * (jari2+jari2);
    console.log(hasil)
}
kelilingLingkaran();

// SOAL KE 2
let kalimat = "";
const tambahKalimat = (test) => {
    kalimat += `${test}`
    
    console.log(kalimat)
}
tambahKalimat('saya ');
tambahKalimat('adalah ');
tambahKalimat('seorang ');
tambahKalimat('frontend ');
tambahKalimat('developer');

// SOAL KE 3
const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName: () => {
            console.log(firstName + " " + lastName)
            return;
        }
    }
}
newFunction("William", "Imoh").fullName();

// SOAL KE 4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const {firstName, lastName, destination, occupation, spell} = newObject;
console.log(firstName, lastName, destination, occupation);

// SOAL KE 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
let combinedArray = [...west, ...east];
console.log(combinedArray)