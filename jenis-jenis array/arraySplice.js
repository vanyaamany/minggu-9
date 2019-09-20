//menambhakan value ke array
let bulan =['januari','febuari','maret','juni'];
bulan.splice(3,0,'april');
console.log(bulan);

//replace value arrray berdasarkan index yang di pilih
bulan.splice(4,1,'mei')
console.log(bulan)

//delete value array berdasarkan index yang di pilih
bulan.splice(4,1)
console.log(bulan)

//delete semua element setelah index ke1
bulan.splice(1)
console.log(bulan)

//replace 3 element dari index ke 0 dengan value baru
let myfish =['angel','clown','trumpet','sturgeon'];
let removed = myfish.splice(0,3,'parrot','anemon','blue');
console.log(myfish)