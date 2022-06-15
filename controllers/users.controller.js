const usersService = require('../services/users.service');

exports.register = (req,res,next) => {
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailId: req.body.emailId,
        password: req.body.password
    }

    usersService.register(data,(error,results) => {
        if(error){
            return res.status(400).send({success:false,data:"Bad Request"})
        }

        return res.status(201).send({
            success: true,
            data: results
        })

    })

}