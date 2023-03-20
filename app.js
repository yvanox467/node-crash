const express =require('express');
const morgan = require('morgan');
const blogRouter = require('./routes/blogRoutes')
const authRouter = express.Router();


//express app

const app =express();


app.use(morgan('dev'));
app.use(express.json())
app.use('/blogs',blogRouter)
app.use('/user',authRouter)
app.use((req,res) => {
    res.status(404).render('404',{title: '404'})
 });

 module.exports = app;