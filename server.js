// all imports below
const express = require("express");
const mongoose = require('mongoose');
const multer  = require('multer')
const p4pBoxingRankings = require("./p4pBoxingRankings")
const divisionalRankings = require("./divisionalRankings.js")
const ufcP4pRankings = require("./ufcRankings.js")
const ufcDivisionalRankings = require("./ufcDivisionalRankings.js")
const DIR = './public/';


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

//file upload

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var uploads = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

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

app.get("/rankings/divisions/ufcp4p", async(req, res) => {
    res.send(ufcP4pRankings);
})

app.get("/rankings/divisions/ufcp4p/ufcdivisions", async(req, res) => {
    res.send(ufcDivisionalRankings);

})

app.post("/items", uploads.single('image'), function(req, res){
    console.log(req.body)

    const image = req.body.item.picture[0]

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