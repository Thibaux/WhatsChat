import request from 'supertest';
import chai from 'chai';
import app from '../../../src/Host/App';
import { authHeaderWithAccess } from '../helpers';

const { expect } = chai;

chai.should();

describe.only('POST /chat', () => {
    it('should return a 201 status code with the newly created chat when provided with a valid userId', async () => {
        const createChatBody = {
            chatTitle: 'title title title',
            userId: '62e1507f55a90731ba71c10f',
        };
        const response = await request(app).post(`/chat`).set(authHeaderWithAccess).send(createChatBody);

        response.body.should.be.a('object');
        expect(response.status).to.equal(201);
        expect(response.body.message).to.equal('Chat created!');
        expect(response.body.chat.chatTitle).to.equal(createChatBody.chatTitle);
    });

    it('should return a 201 status code with the new chat when provided with a different chat title for these users', async () => {
        const createChatDifferentBody = {
            chatTitle: 'Different chat title',
            userId: '62e1507f55a90731ba71c10f',
        };

        const response = await request(app).post(`/chat`).set(authHeaderWithAccess).send(createChatDifferentBody);

        response.body.should.be.a('object');
        expect(response.status).to.equal(201);
        expect(response.body.message).to.equal('Chat created!');
        expect(response.body.chat.chatTitle).to.equal(createChatDifferentBody.chatTitle);
    });

    it('should return a 400 status code because these users already have a chat named with this chatTitle', async () => {
        const inValidCreateChatBody = {
            chatTitle: 'Duplicate chat title',
            userId: '62e1507f55a90731ba71c10f',
        };

        const response = await request(app).post(`/chat`).set(authHeaderWithAccess).send(inValidCreateChatBody);

        response.body.should.be.a('object');
        expect(response.status).to.equal(400);
        expect(response.body.message).to.equal('Chat already exists!');
        expect(response.body.chat.chatTitle).to.equal(inValidCreateChatBody.chatTitle);
    });
});
