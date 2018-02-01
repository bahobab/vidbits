const {assert} = require('chai');
const {buildVideoItem} = require('../test-utils');

describe('user visits landing page', () => {
    describe('first visit', () => {
        it('shows empty video page', () => {
            // set up
            const landingPageElement = '';
            // exercise: visit page
            browser.url('/');
            const videoElements = browser.getText('#videos-container');
            // assert: video elements is empty
            assert.equal(videoElements, landingPageElement);
        });
    });

    describe('if videos exist on the page', () => {
        it('show list of existing videos', () =>{
            // set up
            const video = buildVideoItem();
            // exercise
            browser.url('/videos/create');
            browser.setValue('#title', video.title);
            browser.setValue('#description', video.description);
            browser.click('#createVideoSubmit');
            browser.url('/');
            // assert
            // assert.notEqual(createdVideos, videoElements);
            const page = browser.getText('html');
            assert.include(page, 'my kool video');
        });
    });
    describe('navigate to create page', () => {
        it('click link to go to create video page', () => {
            // set up & exercise
            browser.url('/');
            browser.click('a.create-videos')
            var videosPage = 'Save a video';
            // assert: the create page contains 'Save a video'
            assert.include(browser.getText('body'), videosPage);
        });
    });
});