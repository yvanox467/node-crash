const express =require('express');
const morgan = require('morgan');
const blogRouter = require('./routes/blogRoutes')
const authRouter = require('./routes/authRouters')
const swaggerUI = require('swagger-ui-express')
const swaggerJS = require('swagger-jsdoc')


//express app

const app =express();

//swagger documentation
const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'MyBrand API',
        version: '1.0.0',
        description: 'API for managing blog posts in mybrand website',
       
      },
      servers: [
        {
          url: 'http://localhost:5000',
        }
      ],
      components: {
        schemas: {
          Blog: {
            type: 'object',
            properties: {
              title: { type: 'string' },
              author: { type: 'string' },
              body: { type: 'string' },
              picture: {type:'string'},
            },
          },
          NewBlog: {
            type: 'object',
            properties: {
            title: { type: 'string' },
              author: { type: 'string' },
              body: { type: 'string' },
              picture: {type:'string'},
            },
            required: ['title', 'body', 'snippet'],
          },
          BlogUpdate: {
            type: 'object',
            properties: {
                title: { type: 'string' },
                author: { type: 'string' },
                body: { type: 'string' },
                picture: {type:'string'},
            },
          },
        },
      },
    },
    apis: ['./routes/*.js'],
    yaml: {
     keepCstNodes: true
   }
  };
  console.log(options);
 const specs = swaggerJS(options)
 // middleware
 app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(specs);
  });

 app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))



app.use(morgan('dev'));
app.use(express.json())
app.use('/blogs',blogRouter)
app.use('/',authRouter)
app.use((req,res) => {
    res.status(404).render('404',{title: '404'})
 });

 module.exports = app;
 