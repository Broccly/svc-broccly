const User = require('../models/user.model')
exports.createAccount = async (data) => {
  console.log('reached at auth service')
  console.log(data)
  const {name, email, password, bio} = data;

  //input validation
  if(!name || !email || !password){
    throw new Error("All fields are required");
  }

  // check existing user
  const existingUser = await User.findOne({email});
  if(existingUser){
    throw new Error("User already exist");
  }

  const user = await User.create({
    name, email, password, bio, follower: 0, following: 0
  })

  return user;
}

exports.deleteAccount = async (data) => {
  const {_id} = data;

  if(!_id){
    throw new Error("Required data is missing")
  }

  const result = User.deleteOne({_id });

  if((await result).deletedCount === 0){
    throw new Error("User not found to delete")
  }
  return result;
}