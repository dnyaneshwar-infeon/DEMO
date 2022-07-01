
const Sequelize=require('sequelize');

const sequelize=new Sequelize("onetomany" , "root" , "", {
    host:"localhost",
    dialect:"mysql"
});

module.exports=sequelize;