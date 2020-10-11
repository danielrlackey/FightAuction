// all imports below
const express = require("express");
const mongoose = require('mongoose');
const p4pBoxingRankings = require("./p4pBoxingRankings")
const divisionalRankings = require("./divisionalRankings.js")

let bodyParser = require('body-parser');
const app = express();
let cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// code to connect datbase below
const URI = "mongodb+srv://skunk_hunnt:P@cquiaop4p224@cluster0.4cqzd.mongodb.net/Fight_Auction?retryWrites=true&w=majority"
mongoose.connect(URI, { useNewUrlParser: true })
    .then(() => {
    console.log('Database connected...')
  }).catch((err) => {
    console.log(err);
})

// code to stringify items below
const ItemSchema = new mongoose.Schema({
    itemDescription: { type: String },
    askingPrice: { type: String },
    itemDetails: { type: String },
    pictures: {type: String}
});
const fightItem = mongoose.model('Item', ItemSchema);

// all axios requests below
app.get("/items", function(req, res){
    //make a DB query and send back all the items
    fightItem.find({},(err, data)=>{
        res.send(data)
    })
  })


app.get("/rankings", async(req, res) => {
    res.send(p4pBoxingRankings);    
})

app.get("/rankings/divisions", async(req, res) => {
    res.send(divisionalRankings);
})

app.post("/items", function(req, res){

    let item = new fightItem();
    item.itemDescription = req.body.item.itemDescription
    item.askingPrice = req.body.item.askingPrice
    item.itemDetails = req.body.item.itemDetails
    item.save((err,res)=>{

    })
});


app.delete("/items", function(req, res){
    //Delete all the items in the database
})


app.listen(5000, function(){
    console.log("server has started...")
});