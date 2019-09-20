const hewan =['singa','ualr','harimau'], tambahan=
['buaya','beruang',{obj: 'rusa'}]
const arrayPushHewan=async ()=>{
    await tambahan.map(res=>hewan.push(res))
    console.log(hewan);
}

arrayPushHewan();
//note;
//array map adalah fungsi perulangan array seperti for in dan foreach