const express = require('express');
const http = require('http');
const app = express();
const users = require('./routes/users');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config({ path: './config/.env' });
connectDB();

app.use(express.static('client/build'));
app.use(express.json());
app.use('/users', users);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

http.createServer(app).listen(5000, () => {
    console.log('Listening on port 5000...');
});

