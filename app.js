const express=require('express');
const app=express();

const db=require('./util/connection');
const table=require('./controller/all');
const table1=require('./controller/all');
const insertcust=require('./controller/all');
const insertpro=require('./controller/all');
const findpro=require('./controller/all');
const update=require('./controller/all');


const initapp=async()=>
{
    try{
        db.authenticate();
        console.log("Database Connected");

    }catch(errro)
    {
        console.log(error);
    }
}
initapp();
app.get('/table' , table.table);
app.get('/table1' , table1.table1);
app.post('/insertcust' , insertcust.insertcust);
app.post('/insertpro' , insertpro.insertpro);
app.get('/findpro', findpro.findpro);
app.patch('/update' , update.update);

app.listen(8000 , ()=>{console.log(`Listening on port ${8000}`);});