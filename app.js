const express =require('express');
const morgan = require('morgan');
const blogRouter = require('./routes/blogRoutes')
const authRouter = require('./routes/authRouters')
const swaggerUI = require('swagger-ui-express')
const swaggerJS = require('swagger-jsdoc')


//express app

const app =express();




app.use(morgan('dev'));
app.use(express.json())
app.use('/blogs',blogRouter)
app.use('/',authRouter)
app.use((req,res) => {
    res.status(404).render('404',{title: '404'})
 });

 module.exports = app;
 