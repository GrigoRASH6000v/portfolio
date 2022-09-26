const Router = require("express");

const router = new Router()

router.get('/', (req, res)=>{
    console.log(req, res)
    return res.json({message: 'get user'})
})

module.exports = router
