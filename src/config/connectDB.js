const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '154.41.233.120',
    user: 'u710169684_mahalaxmi',
    password: 'Sanjudas2@',
    database: 'u710169684_mahalaxmi',
});

export default connection;