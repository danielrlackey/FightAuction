// all imports below
const express = require("express");
const mongoose = require('mongoose');
const fileUpload = require("express-fileupload")
const p4pBoxingRankings = require("./p4pBoxingRankings")
const divisionalRankings = require("./divisionalRankings.js")
const ufcP4pRankings = require("./ufcRankings.js")
const ufcDivisionalRankings = require("./ufcDivisionalRankings.js")



let bodyParser = require('body-parser');
let cors = require('cors');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());
app.use(cors());
app.use(express.static('public'));
app.set('port', (process.env.PORT || 5000));
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

app.get("/rankings/divisions/ufcp4p", async(req, res) => {
    res.send(ufcP4pRankings);
})

app.get("/rankings/divisions/ufcp4p/ufcdivisions", async(req, res) => {
    res.send(ufcDivisionalRankings);

})



app.post("/items", function(req, res){
      
    let item = new fightItem();
    item.itemDescription = req.body.item.itemDescription
    item.askingPrice = req.body.item.askingPrice
    item.itemDetails = req.body.item.itemDetails
    item.pictures = req.body.item.pictures
    item.save((err,res)=>{
    })

});

app.post('/upload', (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
  
    const file = req.files.file;
  
    file.mv(`${__dirname}/public/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
  
      res.json({ fileName: file.name, filePath: `/public/${file.name}` });
    });
});


app.listen(app.get('port'), function() {
    console.log('Server started on port '+app.get('port'));
});