const Pool = require('./../config/db');

const selectData = () => {
    return Pool.query(`SELECT * FROM airports`);
}

const insertData = (data) => {
   const {id,name,code} = data;
   return Pool.query(`INSERT INTO airports(id,name,code) VALUES(${id},'${name}','${code}')`);
}
const updateData = (id,data) => {
   const {name,code} = data;
   return Pool.query(`UPDATE airports SET name='${name}', code='${code}' WHERE id='${id}'`);
}
const deleteData = id => {
   return Pool.query(`DELETE FROM airports where id='${id}'`);
}

 module.exports = {insertData,selectData,updateData,deleteData}