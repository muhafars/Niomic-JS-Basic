/**
 ** Tugas 4
*? 1. Pastikan Teman Teman Sudah Menginstall Node JS
*? 2. Teman - Teman Buatlah File di Folder javascript teman teman sebuah file dengan nama file tugas4.js
*? 3. Buatlah Program Dengan Spesifikasi dibawah ini :
*ToDo
- Buatlah 3 buah variabel dengan yang berisi nilai tinggi badan siswa
- Setelah itu teman teman gunakanlah fungsi dari if else untuk mengetahui siswa yang memiliki tinggi badan tertinggi
- Setelah itu teman teman tampilkan hasilnya dari urutan yang tertinggi ke yang terpendek.

*? 4. Happy Codding :)
 */

let tinggi = [180, 160, 170];

let siswaA = tinggi[0];
let siswaB = tinggi[1];
let siswaC = tinggi[2];

const setGrade = () => {
  if (siswaA > siswaB && siswaA > siswaC) {
    console.log("Siswa A Terbesar");
  } else if (siswaA < siswaB && siswaA > siswaC) {
    console.log("Siswa B Terbesar");
  } else {
    console.log("Siswa C Terbesar");
  }
};

setGrade();
let sortedTinggi = tinggi.sort((a, b) => a - b); //ascending
console.log(sortedTinggi);
sortedTinggi = tinggi.sort((a, b) => b - a); //descending
console.log(sortedTinggi);
