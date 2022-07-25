import request from 'supertest';
import chai from 'chai';
import app from '../../../src/Host/App';
const { expect } = chai;

chai.should();

describe('POST /user', function () {
  const createUserBody = {
    username: 'piet',
    password: 'securePassword',
  };

  it('should return a 201 status code with the username & user uid  when provided with a valid update body', async function () {
    const response = await request(app).post(`/user`).send(createUserBody);

    response.body.should.be.a('object');
    expect(response.status).to.equal(201);
    expect(response.body.username).to.equal(createUserBody.username);
  });
});
