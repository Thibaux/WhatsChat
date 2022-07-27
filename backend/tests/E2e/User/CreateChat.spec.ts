import request from 'supertest';
import chai from 'chai';
import app from '../../../src/Host/App';
const { expect } = chai;

chai.should();

describe('POST /chat', function () {
  const createChatBody = {
    username: 'jan',
  };
  const chatCreatorId = '62deacb1732bb73849b4da1b';

  it('should return a 201 status code when provided with a valid create chat body', async function () {
    const response = await request(app)
      .post(`/chat/${chatCreatorId}`)
      .send(createChatBody);

    response.body.should.be.a('object');
    expect(response.status).to.equal(201);
  });
});
