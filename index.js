const express = require('express');
const app = express();
const db =require('./models');
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({
    extended : true
}));

app.listen(PORT, ()=>{
    console.log('Server is running on port 3000');

})

db.sequelize.sync()
.then((result)=>{
    app.listen(PORT,()=>{
        console.log('Server started!');
    })
})

.catch((err)=>{
    console.log(err);
})

app.post("/kandang",async (req,res) => {
    const data = req.body;
    try {
        const kandang = await db.Kandang.create(data);
        res.send(kandang);  
    } catch (err) {
        res.send(err);
    }
});

app.get('/kandang', async (req,res)  => {
    try{
        const kandang = await db.Kandang.findAll();
        res.send(kandang);
    } catch (err) {
        res.send(err);
    }
});

app.put('/kandang/:id', async (req,res)=>{
    const id = req.params.id;
    const data = req.body;
    try{
        const kandang = await db.Kandang.findByPk(id);
        if (!kandang) {
            return res.status(404).send({message : 'Kandang tidak ditemukan'});
        }

        await kandang.update(data);
        res.send({message : 'Kandang berhasil diupdate', kandang});
    } catch (err){
        res.status(500).send(err);
    }
});