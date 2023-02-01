const { userDataModal } = require("../connection")
const jwt = require('jsonwebtoken')
exports.signup = async (req, res) => {
    const { email, fullname, occupation, soc } = req.body
    if (email && fullname && occupation && soc) {
        const findEmail = await userDataModal.findOne({ email })
        if (findEmail === null) {
            const dataModal = new userDataModal({
                email,
                fullname,
                occupation,
                soc,
            })
            const responce = await dataModal.save()
            const token = await jwt.sign({ email }, "laskdfj029e2lk4lk2j4092lkj3lkj2")
            res.status(200).json({
                massage: 'registration successful',
                status: true,
                token: token.split('.')[1]
            })

        } else {
            res.status(403).json({
                massage: 'email already exists',
                status: false,
                data: []
            })
        }
    } else {
        res.status(409).json({
            massage: 'please enter valid credentials',
            status: false,
            data: []
        })
    }
}