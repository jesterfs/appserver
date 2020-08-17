const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('Play App', () => {
    it('should return json', () => {
       return supertest(app)
        .get('/apps')
        .query( { genres: 'Action'})
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.lengthOf.at.least(1);
            const results = res.body[0];
            expect(results).to.include("ROBLOX");
        });
    });

    
});