const authService = require('../services/auth.service')

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
    const user = authService.deleteAccount({_id: id})

    res.status(201).json({
      messge: "User deleted successfully",
      user
    })

  }catch(err){
    res.status(400).json({error: err.message})
  }
}

exports.Login = async (req, res) => {
  //login
}