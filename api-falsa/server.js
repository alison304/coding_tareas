const express = require('express');
const app = express();
const port = 8080;

const { faker } = require('@faker-js/faker');

const usuario = () => {
    return {
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: faker.phone.number('+56 9 ########'),
        email: faker.internet.email(),
        password: faker.internet.password(),
    }
}

const empresa = () => {
    return {
        id: faker.datatype.uuid(),
        name: faker.company.name(),
        address:
        {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            postalCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
}

app.get('/api/users/new', (req, res) => {
    const users = usuario();
    res.json({usuario: users})
})

app.get('/api/companies/new', (req, res) => {
    const company = empresa();
    res.json({empresa: company})
})

app.get('/api/user/company', (req, res) => {
    const user = usuario();
    const company = empresa();
    res.json({ usuario: user, empresa: company})
})

app.listen(port, () => console.log('Se ha conectado exitosamente al puerto'));


