const {assert} = require('chai'),
      request = require('supertest'),
      jsDom = require('jsdom');

const {connectDatabase, disconnectDatabase} = require('../database-utilities');
const Video = require('../../models/video');
    
const app = require('../../app');

describe('server path: /videos', () => {
    // database set up and teardown
    beforeEach(connectDatabase); // this actually drops database too
    afterEach(disconnectDatabase);

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

        it('actually creates and saves a video with title and description', async () => {
            // set up
            const myVideo = {title: 'My video', description: 'My Great Vacation'};
            // exercise
            const response = await request(app)
                            .post('/videos')
                            .type('form')
                            .send(myVideo);
            const createdVideo = await Video.findOne(myVideo);
            // console.log('>>>>', createdVideo);
            // assert
            assert.equal(createdVideo.title, myVideo.title);
            assert.equal(createdVideo.description, myVideo.description);
        });
    });
});