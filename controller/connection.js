const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://Rajputana:ty9we3ys86@cluster0.r8evqrf.mongodb.net/techkilla', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const userDataSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        require
    },
    fullname: {
        type: String,
        require,
    },
    occupation: {
        type: String,
        require,
    },
    soc: {
        type: String,
        require,
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const userDataModal = new mongoose.model('userprofile', userDataSchema)
module.exports = { userDataModal }