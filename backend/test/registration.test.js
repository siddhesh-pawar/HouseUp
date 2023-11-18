const express = require('express');
const supertest = require('supertest');
const { expect } = require('chai');

const app = express();
const router = require('../controllers/userRegistration');
app.use('/', router);

describe('Registration API', () => {
    it('should register a user with valid data', async () => {
        const response = await supertest(app)
            .post('/register')
            .send({
                name: 'John Doe',
                phone: '7998123451',
                email: 'john.doe@example.com',
                password: 'Password@123',
                repassword: 'Password@123',
            });

        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal('Registration successful');
    });

    it('should return an error with empty fields', async () => {
        const response = await supertest(app)
            .post('/register')
            .send({
                name: '',
                phone: '',
                email: '',
                password: '',
                repassword: '',
            });

        expect(response.status).to.equal(400);
        expect(response.body.message).to.be.an('object').that.has.property('message').that.includes(
            'Name is required',
            'Phone number is required',
            'Email is required',
            'Password is required',
            'Re-Password is required'
        );
    });

    it('should return an error with non-matching password', async () => {
        const response = await supertest(app)
            .post('/register')
            .send({
                name: 'John Doe',
                phone: '123456789',
                email: 'john.doe@example.com',
                password: 'Password@',
                repassword: 'Password@1',
            });

        expect(response.status).to.equal(400);
        expect(response.body.message).to.be.an('object').that.has.property('message').that.includes(
            'Passwords do not match',
            'Invalid phone number'
        );
    });

    it('should return an error with invalid email', async () => {
        const response = await supertest(app)
            .post('/register')
            .send({
                name: 'John Doe',
                phone: '1234387890',
                email: 'johndoe',
                password: 'Password@1',
                repassword: 'Password@1',
            });

        expect(response.status).to.equal(400);
        expect(response.body.message).to.be.an('object').that.has.property('message').that.includes('Invalid email');
    });
});

