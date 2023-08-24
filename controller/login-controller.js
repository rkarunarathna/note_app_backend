const connection = require('../db/db-connection');
const path = require('path');

const getLoginUser = async (req, res) => {
    const { user_name, password } = req.body;
  
    try {
      // Check if user exists
      const query = 'SELECT user_id, password FROM users WHERE user_name = ?';
      const [rows] = await connection.promise().query(query, [user_name]);
  
      if (rows.length === 0) {
        return res.json({ success: false, message: 'User not found' });
      }
  
      const user = rows[0];

      if(password ===user.password){
        return res.json({ success: true, user_id: user.user_id });
      }else{
           // If passwords don't match, send an error message
      return res.json({ success: false, message: 'Invalid password' });
      }
      
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ success: false, message: 'An error occurred' });
    }
  };
  

module.exports = { getLoginUser };
