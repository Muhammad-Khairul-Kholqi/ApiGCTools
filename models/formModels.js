const dbPool = require('../config/database')

// read
const readForm = () => {
    const SQLQuery = 'SELECT * FROM tb_form';
    return dbPool.execute(SQLQuery);
}

module.exports = {
    readForm,
}