const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send("<h1>Hello World</h1>")
})

router.get('/all', (req,res)=>{
    res.send([{id:1 , name:"sachin"},{id:2 , name:"saurev"}])
})

router.get('/one', (req,res)=>{
    res.send({id:1 , name:"sachin"})
})

module.exports = router;