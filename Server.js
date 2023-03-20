const mongoose = require('mongoose');
const app = require('./app')

const uri =('mongodb+srv://Yvanox:Yvanox2001@cluster0.e66at1b.mongodb.net/Trial?retryWrites=true&w=majority')


mongoose.connect(uri).then((result)=>{
    console.log('Connected to MongoDB');
    app.listen(5000);
    console.log('Listening on port 5000');
}).catch((err)=>console.log(err.message));

