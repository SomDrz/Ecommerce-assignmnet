const mongoose = require('mongoose');


const Database =()=>{
    mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('db connected'))
  .catch((err) => console.error('dberror:', err));

}

module.exports = {
    Database 
}