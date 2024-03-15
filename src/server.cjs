const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/login', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', ()=>{
    console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/api/login', async(req, res)=> {
    const {username, password} = req.body;    
    try{
        const user = await User.findOne({username, password});
        
        if(user){
            const token = jwt.sign({username}, 'my-first-login-page', {expiresIn: '12h'});
            console.log("Login Server Token : " , token);            
            res.json({success: true, message: 'Login successful', token: token});            
        }
        else{
            res.json({success: false, message: 'Invalid credentials'});
        }
    }
    catch(error){
        console.error(error);
        res.status(500).json({success: false, message: 'Internal server error'});
    }
});

app.post('/api/register', async (req, res) => {
    console.log('inside api register');
    const { username, password } = req.body;    
    try {      
      const existingUser = await User.findOne({ username });      
  
      if (existingUser) {
        res.json({ success: false, message: 'Username already exists.' });
      } else {        
        const newUser = new User({ username, password });
        await newUser.save();
        res.json({ success: true, message: 'Registration successful. Please Login' });
      }
    } catch (error) {
      console.error('An error occurred:', error);
      res.json({ success: false, message: 'An error occurred.' });
    }
  });

  function authenticateToken(req, res, next){
    const token = req.headers['authorization'];

    console.log('Authenticate Server Token : ' + token);

    if(!token){
      return res.status(401).json({success: false, message: 'Unauthorized' });
    }
    jwt.verify(token.split(' ')[1], 'my-first-login-page', (err, user)=>{
      if (err){
        return res.status(403).json({success: false, message: 'Invalid token'});
      }
      req.user = user;
      next();
    });
  }

  app.get('/api/registered-users', authenticateToken, async (req, res) => {
    console.log('Received Headers:', req.headers);
    try{
      const users = await User.find({}, {_id:0});
      res.json({success: true, users});
    } catch(error){
      console.error('An error occured ' + error);
      res.json({success: false, message: 'An error occurred.'});
    }
  });

app.listen(port, ()=>{
    console.log('Server is running on port', port);
});