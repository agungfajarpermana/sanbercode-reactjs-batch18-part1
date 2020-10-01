// SOAL KE 1
var no = 1;

while(no <= 20){
	if (no === 1) {
    	console.log('LOOPING PERTAMA');
    }
    
    if ((no % 2) === 0) {
        console.log(`${no} - I love coding`);
    }
	
    if (no === 20) {
    	console.log("LOOPING KEDUA");
    	while(no > 0){

    		if ((no % 2) === 0) {
        		console.log(`${no} - I will become a frontend developer`);
    		}

    		no--;
		}
        break;
    } else {
        no++;
    }
}

// SOAL KE 2
for(var angka = 1; angka <= 20; angka++){
    if ((angka%2) == 1) {
    	if ((angka%3) == 0) {
        	console.log(`${angka} - I Love Coding`);
        } else {
        	console.log(`${angka} - Santai`);
        }
    } else if ((angka%2)===0) {
    	console.log(`${angka} - Berkualitas`);
  	} 
}

// SOAL KE 3
for(i=1; i<=7; i++) {
	console.log("#".repeat(i));
}

// SOAL KE 4
var kalimat="saya sangat senang belajar javascript";
console.log(kalimat.split(" "));

// SOAL KE 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var output = [];
var inserted = false;

for(var i = 0; i < daftarBuah.length; i++){
	for (var j = 0; j < output.length; j++) {
    	if (daftarBuah[i] < output[j]){
      		inserted = true;
      		output.splice(j, 0, daftarBuah[i]);
      		break;
    	}
    }
    if (!inserted)
    	output.push(daftarBuah[i]);
}

for (var o = 0; o < output.length; o++) {
    console.log(output[o])
}