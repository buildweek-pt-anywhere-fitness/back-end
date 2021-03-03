const JWT = require("jsonwebtoken");

function restrict(role) {
    const roles = ['client', 'instructor'];

    return async (req, res, next) => {
        try {
            const token = req.cookies.token

            if(!token) {
                return res.status(401).json({
                    message: "Invalid Credentials"
                })
            }

        JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) {
                return res.status(401).json({
                    message: "Invalid Credentials"
                })
            }

        if(
            roles.indexOf(decoded.user.role) < roles.indexOf(role)) {
                return res.status(401).json({
                    message: "You're Not Authorized",
                    decoded
                })
            }

            req.token = decoded;
            next();
        
        })
        } catch(err) {
            next(err)
        }
    }
}


module.exports = {
    restrict
}