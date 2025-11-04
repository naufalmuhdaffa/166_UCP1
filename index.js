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

