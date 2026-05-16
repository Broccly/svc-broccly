const mongoose = require('mongoose')

const connectDB = async () => {
  try{
    console.log("Connectig to Database")
    const conn = await mongoose.connect(process.env.DB_STRING)
    console.log("Database connected")
  }catch(err){
    console.error("Database connection failed", err.message)
    process.exit(1)
  }
}

module.exports = connectDB