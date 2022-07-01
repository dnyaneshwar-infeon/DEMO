const { Sequelize , DataTypes }= require('sequelize');
const db=require('../util/connection');

const product=db.define("product" , {
    pro_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
    },
    pro_name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    pro_type:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    pro_cost:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
});

module.exports=product;