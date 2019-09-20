const a ='a';
const myPromise = new Promise((resolve,reject)=>{
    if(a === 'a'){
        resolve("berhasil");
    }else{
        reject("gagal");
    }
});

myPromise.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
});


//baca https expressjs.com
