const { connect } = require('mongoose');

connect('mongodb://localhost/authors_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('We are making some connections with the database!!!'))
    .catch(() => console.log('Ohhhh, something went wrong!'));