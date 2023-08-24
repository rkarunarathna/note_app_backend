const connection =require('../db/db-connection');

const addUsers=(req,res)=>{
    connection.query('insert into users (user_name,password) values(?,?)',[req.body.user_name,req.body.password],(err,rows)=>{
        if (err) throw err
          
        res.send(rows)
    })
}

module.exports={addUsers}