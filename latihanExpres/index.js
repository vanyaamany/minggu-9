const express = require ('express');
const app = express();
const port= 8000;

app.get('/',(req, res)=>{
    res.send(`halo im vavle`);
})

app.listen(port,()=> console.log('app listen on port $(port)'))