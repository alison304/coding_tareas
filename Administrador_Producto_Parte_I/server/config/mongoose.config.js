const { connect } = require('mongoose');

module.exports.connectMongo = () => {
    connect('mongodb://localhost:27017/retailDB')
        .then(() => console.log('We are making some connections with the database!!!'))
        .catch(() => console.log('Ohhhh, something went wrong!'));
} 