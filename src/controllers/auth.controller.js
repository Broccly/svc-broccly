const authService = require('../services/auth.service')

exports.verifyGoogleToken = async (req, res) => {
  try {
    const { googleToken } = req.body
    if (!googleToken) return res.status(400).json({ error: 'googleToken is required' })

    const tokens = await authService.verifyGoogleToken(googleToken)
    res.status(200).json(tokens)
  } catch (err) {
    res.status(401).json({ error: err.message })
  }
}

exports.createAccount = async (req, res) => {
  try{
    const user = await authService.createAccount(req.body)

    res.status(201).json({
      message: "User created successfully",
      user
    })
  } catch (err) {
    res.status(400).json({error: err.message})
  }
}

exports.deleteAccount = async (req, res) => {
  try{
    const { id } = req.params;
    const user = await authService.deleteAccount({_id: id})

    res.status(200).json({
      message: "User deleted successfully",
      user
    })

  }catch(err){
    res.status(400).json({error: err.message})
  }
}