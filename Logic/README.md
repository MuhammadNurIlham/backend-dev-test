## Function to determine the value category based on the score

**Uses an if-else conditional structure to determine the score category**
**Example of function usage**

```sh
function tentukanKategoriNilai(nilai) {
  if (nilai >= 86 && nilai <= 100) {
    return "A";
  } else if (nilai >= 71 && nilai <= 85) {
    return "B";
  } else if (nilai >= 56 && nilai <= 70) {
    return "C";
  } else if (nilai >= 41 && nilai <= 55) {
    return "D";
  } else {
    return "E";
  }
}
```
```sh
const skor = 75; // Student score value
const kategori = tentukanKategoriNilai(skor);
console.log("Skor:", skor);
console.log("Kategori Nilai:", kategori);
```
