
const { Sequelize , DataTypes}=require('sequelize');
const product=require('../model/product');
const customer=require('../model/customer');
const sequelize=require('sequelize');
const { result } = require('lodash');

const table=function(req , res)
{
    customer.sync();
    return res.json(result);
}
const table1=function(req , res)
{
    product.sync();
    return res.json(result);
}
const insertcust=function(req ,res)
{
    customer.create({
        cust_name:req.query.cust_name,
        cust_city:req.query.cust_city,
        cust_email:req.query.cust_email,
    }).then((result)=>{
        return res.json(result);
    }).catch((error)=>{
        console.log(error);
    })
}
const insertpro=function(req ,res)
{
    product.create({
        pro_id:req.query.pro_id,
        pro_name:req.query.pro_name,
        pro_type:req.query.pro_type,
        pro_cost:req.query.pro_cost,
        customerId:req.query.customerId,
    }).then((result)=>{
        return res.json(result);
    }).catch((error)=>{
        return res.json(error);
    })
}

const findpro=function(req ,res)
{
    product.findAll({
        attributes:["pro_id" , "pro_name" , "pro_type" , "pro_cost"],
        where:{
            customerId:req.query.customerId,
        },
    }).then((result)=>{
        return res.json(result);
    }).catch((error)=>{
        return res.json(error);
    })
}
const update=function(req , res)
{
    product.update(
        {
        pro_cost:req.query.pro_cost,
         },
         {
           where:{  pro_id:req.query.pro_id, },
        },
    ).then((result)=>{
        return res.json(result);
    }).catch((error)=>{
        return res.json(error);
    })
}
module.exports.table=table;
module.exports.table1=table1;
module.exports.insertcust=insertcust;
module.exports.insertpro=insertpro;
module.exports.findpro=findpro;
module.exports.update=update;