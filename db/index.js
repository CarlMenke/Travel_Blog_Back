const mongoose = require('mongoose')

mongoose
.connect('mongodb://127.0.0.1:27017/travel-blog-db' )
.then(()=>{
    console.log('successfully connected to travel-blog-db')
})
.catch((e)=>{
    console.log('Error Connecting: ' , e.message);
})

// mongoose.set('debug' , true)
const db = mongoose.connection;

module.exports = db