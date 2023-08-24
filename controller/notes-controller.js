const connection =require('../db/db-connection');
const path = require('path');
// Serve static images from the 'assets' folder


const addNotes = (req, res) => {
    
   
    const { notes_text } = req.body;
    const{user_id}=req.body;
    const{title}=req.body
    const image_url = req.file ?req.file.filename : null; // Use the uploaded image URL
    console.log(notes_text);
    connection.query(
      'INSERT INTO notes (notes_text,user_id,title,image_url) VALUES (?,?,?,?)',
      [notes_text,user_id, title,image_url],
      (err, result) => {
        if (err) {
          console.error('Error adding notes:', err);
          res.status(500).json({ error: 'Failed to add notes' });
        } else {
          res.json({ message: 'Notes added successfully' });
        }
      }
    );
  };

  
  const deleteNote = (req, res) => {
    const noteId = req.params.id;

    connection.query(
        'DELETE FROM notes WHERE notes_id = ?',
        [noteId],
        (err, result) => {
            if (err) {
                console.error('Error deleting note:', err);
                res.status(500).json({ error: 'Failed to delete note' });
            } else {
                // updated list eka return karanawa
                getNotes(req, res);
            }
        }
    );
};

const getNotes=(req,res)=>{
  const userid=req.params.user_id;
  
    connection.query('select * from notes where user_id=?',[userid],(err,rows)=>{
        if (err) throw err
          
        res.send(rows)
    })
}

module.exports={addNotes,getNotes,deleteNote};