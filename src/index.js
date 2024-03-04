require('dotenv').config();
const cors = require('cors');
const express = require('express');
const logRequest = require('../middleware/logRequest');
const routesForm = require('../routes/routesForm');
const PORT = process.env.PORT;

const app = express();

app.use(logRequest);
app.use(express.json());
app.use(cors());
app.use('/form', routesForm);

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
});

app.listen(PORT, () => {
    console.log(`berjalan pada port ${PORT}`)
});