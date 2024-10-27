const USER = require('../Models/user')
const jwt = require('jsonwebtoken')

const userSignup=(req,res)=>{
  console.log(req.body)
  USER({
    name:req.body.username,
    email:req.body.email,
    password:req.body.password,
    mobile:req.body.mobile
  }).save()
  .then((resp)=>{
    res.status(200).json({message:'signup successfull'})
  })
  .catch((err)=>{
    console.log(err);
    res.status(500).json({message:'signup failed',err:err})
  })
}

const userLogin=(req,res)=>{
  console.log(req.body);

  USER.findOne({name:req.body.username}).then((data)=>{
    if(data.password===req.body.password){
      const token =jwt.sign({name:data.name,email:data.email},process.env.JWT_PASSWORD,{expiresIn:'1d'})

      res.status(200).json({message:'Login successfull',token})
    }
  })
  .catch((err)=>{
    console.log(err);
  }) 
}

module.exports={userLogin,userSignup}