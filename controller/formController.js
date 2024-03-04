const formModels = require('../models/formModels');

// function read
const readForm = async (req, res) => {
    try {
        const[data] = await formModels.readForm();
        res.json({
            message: 'Get all data success!',
            data:data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message
        })
    }
}

module.exports = {
    readForm
}