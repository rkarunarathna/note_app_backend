const connection =require('../db/db-connection');

const addImages=(req,res)=>{
    connection.query('insert into images (notes_id,image_url) values(?,?)',[req.body.notes_id,req.body.image_url],(err,rows)=>{
        if (err) throw err
          
        res.send(rows)
    })
}

module.exports={addImages}