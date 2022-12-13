/**
 ** Tugas 
*? 1. Pastikan Teman Teman Sudah Menginstall Node JS
*? 2. Teman - Teman Buatlah File di Folder javascript teman teman sebuah file dengan nama file tugas.js
*? 3. Buatlah Program Dengan Spesifikasi dibawah ini :
*ToDo 
- Buatlah sebuah perulangan dengan kondisi <=20 atau sebanyak 20 kali
*Todo
- Setelah itu teman teman tampilkan nilai kelipatan 3 pada perulangan tersebut
*ToDo
- Tampilkan hasilnya dengan console.log()

*? 4. Happy Codding :)
 */
let result;
for (i = 0; i <= 20; i++) {
  if (i % 3 === 0 && i > 0) {
    result = i;
    console.log(result);
  }
}

console.log(`ini dari luar ${result}`); //mengambil output terakhir
