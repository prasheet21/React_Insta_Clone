const express = require('express') ;
const cors = require('cors') ;
const mongo = require('mongodb') ;
const bc = require('bcrypt') ;
const { useReducer } = require('react');

const mongoClient = mongo.MongoClient ;

let database = undefined ;

mongoClient.connect('mongodb://127.0.0.1:27017/instagram_clone' , { useUnifiedTopology: true } , (err , db) => {
    if (err){
        console.log(err) ;
        return ;
    }
    console.log("Successfully connected to MongoDB") ;
    database = db.db() ;
})

const app = express() ;
app.use(express.json()) ;
app.use(cors({
    origin : '*'
}))



app.post('/loginUser' , async(req , res) => {
    let validCredentials = false ;
    let allUsers = await database.collection('users').find({}).toArray() ;
    for (let data of allUsers){
        if (data.email === req.body.username){
            userExist = true ;
            validCredentials = await bc.compare(req.body.password , data.password) ;
            break ; 
        }
    }
    console.log(req.body.username , " " ,req.body.password) ;
    if (validCredentials){
        res.send('usr_verified') ;
    }else{
        res.send('invalid_cred')
    }
})

app.post('/registerUser' ,async(req , res) => {
    
    console.log(req.body.password) ; 

    bc.genSalt(10 , (err , salt) => {
        if (err){
            console.log(err) ;
            return ;
        }
        bc.hash(req.body.password , salt , async(err , result) => {
            req.body.password = result ;
            await database.collection('users').insertOne(req.body) ;
        })
    })
    res.status(200).send() ;
})

app.get('/isRegistered' , async(req , res) => {
    let allUsers = await database.collection('users').find({}).toArray() ; 
    console.log("These are all users : " , allUsers) ;
    console.log("Incoming email is : " , req.query.email) ;
    if (allUsers.filter(data => data.email === req.query.email).length != 0){
        res.send('exist') ;
    }else{
        res.send('new') ;
    }
    
})

app.listen(8080 , () => console.log("This Express server Successfully Started")) ;