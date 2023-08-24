const express =require('express')
const router =express.Router();
const multer = require('multer');
const {addNotes,getNotes,deleteNote}=require('../controller/notes-controller')

// Configure multer for image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './assets'); // Set your desired upload directory
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  const upload = multer({ storage: storage });

router.post('/save_notes',upload.single('image'),addNotes);

router.get('/get_notes/:user_id',getNotes);
router.delete('/delete_note/:id', deleteNote);

module.exports=router;