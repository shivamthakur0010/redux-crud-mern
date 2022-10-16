require('./src/config/db');
const cors = require('cors');
const usersRouter = require('./src/routes/users')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/users',usersRouter);

app.listen(PORT,()=>{
    console.log(`running at ${PORT}`);
})