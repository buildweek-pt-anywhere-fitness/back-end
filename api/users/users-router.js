const express = require('express')
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
const Users = require('./users-model')

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const users = await Users.find()
        res.json(users)
    } catch(err) {
        next(err)
    }
})

router.post('/register', async (req, res, next) => {
    try {
        const { username, password, auth_code } = req.body;
        const user = await Users.findByUsername(username)

        if(user) {
            return res.status(409).json({
                message: "Username is already taken"
            })
        }

        if(auth_code === 'abc123') {
            // checks if user inserts correct auth_code to be instructor.
            
            await Users.add({
                username,
                password: await bcrypt.hash(password, 14),
                auth_code
            })

            return res.status(201).json({ message: 'Register Successful' })

        } else if (auth_code === undefined || auth_code === null) {
            //checks if user put nothing for auth_code. if so, will be a client.

            await Users.add({
                username,
                password: await bcrypt.hash(password, 14),
                auth_code: "0"
                //set auth_code to "0" because SQLite doesnt do inner joins with 
                //undefined values so thatI can relate this auth_code to the client role. 
            })
            return res.status(201).json({ message: 'Register Successful' })

        } else {
            return res.status(401).json({
                message: "Invalid Auth Code"
            })
        }

    } catch(err) {
        next(err)
    }
})

router.post('/login', async (req, res, next) => {
    try {
        const  { username, password } = req.body;
        const user = await Users.findByUsername(username)

        if(!user) {
            return res.status(401).json({
                message: 'Invalid Credentials'
            })
        }

        const passwordValid = await bcrypt.compare(password, user.password)

        if(!passwordValid) {
            return res.status(401).json({
                message: 'Invalid Credentials'
            })
        }

        const token = JWT.sign({ user }, process.env.JWT_SECRET)

        res.cookie('token', token)
        res.json({
            message: `Welcome, ${user.username}!`,
            token
        })

    } catch(err) {
        next(err)
    }
})

// router.get("/logout", async (req, res, next) => {
//     try {
//         req.cookie.destroy((err) => {
//             if (err) {
//                 next(err);
//             } else {
//                 res.status(204).end();
//             }
//         })
//     } catch (err) {
//         next(err)
//     }
// })

module.exports = router;