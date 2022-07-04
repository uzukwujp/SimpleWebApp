const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res)=>{

    res.send(`<h2> Interested In Devops Education </h2>  
    <p> Checkout www.darey.io its the true Learn By Doing Platform. You get to implement 30 projects to complete the programe
     </p>`)

})

app.listen(PORT, ()=>{
    console.log(`serverlistening on port:${PORT}`)
})


