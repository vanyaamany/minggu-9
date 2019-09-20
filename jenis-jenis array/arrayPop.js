const hewan =['singa','ualr','harimau'], tambahan=
['buaya','beruang',{obj: 'rusa'}]
const arrayPushHewan=async ()=>{
    await tambahan.pop();
    await tambahan.map(res=>hewan.push(res))
    console.log(hewan);
}

arrayPushHewan();
//note
//array pop adadlah fungsi array untuk menghapus index/ element terakhir diri sebuah array