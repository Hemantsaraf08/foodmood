const {DB_Link}=require('../secrets')
const mongoose=require('mongoose');
mongoose.connect(DB_Link)
.then(function(db){
    console.log(db)
}).catch(function(e){
    console.log(e)
})