const mysql=require('mysql2')

let connection;

function getConnection(){
    if(!connection){
        connection=mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123123',
        database: 'note_app_db'
        })
    }
    return connection;
}
module.exports=getConnection();