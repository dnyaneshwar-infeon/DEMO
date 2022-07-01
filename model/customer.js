const { Sequelize , DataTypes }=require('sequelize');

const db=require('../util/connection');
const product = require('./product');
const customer=db.define("customer" , {
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    cust_name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    cust_city:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    cust_email:{
        type:DataTypes.STRING,
        allowNull:true,
    },
});
customer.hasMany(product);
product.belongsTo(customer);

module.exports=customer;