require('dotenv').config()
const app = require('./src/app')
const PORT = 4000
const connectDB = require('./src/config/db')
const cron = require('node-cron')

connectDB()

app.listen(PORT, () => {
  console.log("App is running at ", PORT)
})

// Keep-alive: ping the UI every 5 minutes to prevent Render cold starts
cron.schedule('*/5 * * * *', async () => {
  const uiUrl = (process.env.UI_URL || 'http://localhost:3000') + '/api/health'
  try {
    const res = await fetch(uiUrl)
    console.log(`[keep-alive] Pinged UI ${uiUrl} → ${res.status}`)
  } catch (err) {
    console.warn(`[keep-alive] Failed to ping UI ${uiUrl}:`, err.message)
  }
})