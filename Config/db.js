const mongoose = require("mongoose");


const DBconnect=()=>{
  const mongoDB_URI='mongodb://127.0.0.1:27017/e42Ecommerce'
mongoose.connect(mongoDB_URI).then((res)=>{
console.log('DB connection successfull');
})
.catch(err=>{
console.log('DB connection failed');
})
}

module.exports=DBconnect
