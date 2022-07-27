import request from 'supertest';
import chai from 'chai';
import app from '../../../src/Host/App';
import { authHeaderWithAccess } from '../helpers';

const { expect } = chai;

chai.should();

describe('POST /chat', function () {
    const createChatBody = {
        chatTitle: 'best title ever',
        userId: '62e1507f55a90731ba71c10f',
    };

    it('should return a 201 status code with the newly created chat when provided with a valid userId', async function () {
        const response = await request(app).post(`/chat`).set(authHeaderWithAccess).send(createChatBody);

        response.body.should.be.a('object');
        expect(response.status).to.equal(201);
        expect(response.body.message).to.equal('Chat created!');
        expect(response.body.chat.chatTitle).to.equal('best title ever');
    });
});
