// soal nomer 1

let input = prompt ('Pilih divisi anda (HR/Programmer) : ');

if (input == 'HR') {
    alert('tugas anda sebagai bagian rekrutmen');
} 
else if ( input == 'Programmer') {
    alert('tugas anda membuat web perusahan');
}
else {
    alert('posisi yang anda masukkan tidak tersedia');
};

//soal 2

let a = prompt ('masukkan nilai a :');
let b = prompt ('masukkan nilai b : ');

if( a > b) {
    console.log ('a lebih dari b');
}
else if ( a < b) {
    console.log ('a kurang dari b');
}
else if ( a == b) {
    console.log ('a sama dengan b');
}
else {
    console.log('angka yang anda masukkan salah');
}

//soal 3

let day = prompt('masukkan nama hari :');

switch (day) {
    case day == 'minggu':
        console.log('1');
        break;
    case day == 'senin':
        console.log('2');
        break;
    case day == 'selasa':
        console.log('3');
        break;
    case day == 'rabu':
        console.log('4');
        break;
    case day == 'minggu':
        console.log('5');
        break;
    case day == 'minggu':
        console.log('6');
         break;
    case day == 'minggu':
        console.log('7');
        break;
    case day == ' ':
        console.log('isi data');
        break;
}

//soal 4
let change = prompt('masukkan gerakan (UP/RIGHT/BOTTOM/LEFT) : ');

switch (change) {
    case change == 'UP':
        console.log('berjalan ke atas');
        break;
    case change == 'RIGHT':
        console.log('berjalan ke kanan');
        break;
    case change == 'BOTTOM':
        console.log('berjalan ke bawah');
        break;
    case change == 'LEFT':
        console.log('berjalan ke kiri');
        break;
    case change == ' ':
        console.log('masukkan posisi');
        break;
   
}
