import request from 'supertest';
import chai from 'chai';
import app from '../../../src/Host/App';
const { expect } = chai;

chai.should();

describe('GET /users', function () {
    it('should return a 200 status code', async function () {
        const username = 'piet';

        const response = await request(app).get(`/users?search=${username}`);

        response.body.should.be.a('array');
        expect(response.status).to.equal(200);
        expect(response.body[0].username).to.equal(username);
    });
});
