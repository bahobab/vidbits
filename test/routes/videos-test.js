
const {assert} = require('chai');
const request = require('supertest');
const app = require('../../app');
// renders existing videos

const Video = require('../../models/video');
const {connectDatabaseAndDropData, disconnectDatabase} = require('../setup-teardown-utils');
const {parseTextFromHTML, buildVideoItem} = require('../test-utils');

describe('GET', () => {
    // database set up and teardown
    beforeEach(connectDatabaseAndDropData); // this actually drops database too
    afterEach(disconnectDatabase);

    describe('if there are videos', () => {

        it('render existing videos', async () => {
            // set up
            const video1 = await Video.create(buildVideoItem());
            // const video2 = await Video.create({title: 'video2', description: 'Kool2'});
            // exercise
            const response = await request(app)
                            .get('/');
            // assert
            assert.include(parseTextFromHTML(response.text, '.video-title'), video1.title);
            // assert.include(parseTextFromHTML(response.text, '.video-title'), 'video2');
        });
    });
});
