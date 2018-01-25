const {assert} = require('chai'),
      request = require('supertest'),
      jsDom = require('jsdom');
    
const app = require('../../app');
const Video = require('../../models/video');

describe('server path: /videos', () => {
    describe('describe POST', () => {
        it('create: returns 201 status code', async () => {
            // set up
            const video = {title: 'My video', description: 'My vacation'};
            // exercise
            const response = await request(app)
                            .post('/videos')
                            .type('form')
                            .send(video);
            // assert
            assert.equal(response.status, 201);
        });
    });
});