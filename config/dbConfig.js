const mongoose =require('mongoose')

mongoose.connect(process.env.mongo_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const connection =mongoose.connection;

connection.on('error',()=>{
    console.log('Error connecting to database');
});
connection.on('conneected',()=>{
    console.log('Mongo DB connected');
});

module.exports=connection;
