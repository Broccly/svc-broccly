require('dotenv').config()
const app = require('./src/app')
const PORT = 3000
const connectDB = require('./src/config/db')

connectDB()

app.listen(PORT, () => {
  console.log("App is running at ", PORT)
})