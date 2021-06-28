const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

// router.get('/', (req,res) => {
//     res.send("hey its user route")
// })


//update user
router.put('/:id', async (req,res) => {
    if(req.body.userID === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password,salt)
            } catch(err){
                res.json(err)
            }
        }
    
        try{
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            })
            res.status(200).json("Account has been updated")
        } catch(err){
            res.json(err)
        }
    }
        else{
            return res.status(403).json("you can update only your account")
        }
    
})


///delete user

router.delete('/:id', async (req,res) => {
    if(req.body.userID === req.params.id || req.body.isAdmin){
         try{
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Account has been deleted")
        } catch(err){
            res.json(err)
        }
    }
        else{
            return res.status(403).json("you can update only your account")
        }
    
})

//get an user id

router.get('/:id', async (req,res) => {
    try{
        const user = await User.findById(eq.params.id)
        res.status(200).json(user)
    } catch(err){
        res.status(500).json(err)
    }
})

//follow a user

router.put('/:id/follow', async (req,res) => {
    if(req.body.userID !== req.params.id){
        try{
            const user = await User.findById(req.params.id)
            const currentUser =await User.findById(req.body.userID)
            if(!user.followers.includes(req.body.userID)){
                await user.updateOne({$push : { followers: req.body.userID}})
                await currentUser.updateOne({$push : { following: req.params.id}})
                res.status(200).json("user has been followed")
            }else{
                res.status(403).json("you already follow the user")
            }

        }catch(err){
        res.status(500).json(err)
    }

    }else {
        res.status(403).json("you can not follow yourself")
    }
})

module.exports = router