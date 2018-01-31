const {assert} = require('chai');

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
        it('shows list of existing videos', () =>{
            // set up
            const videoElements = '';
            // exercise
            browser.url('/');
            const createdVideos = browser.getText('#videos-container');
            // assert
            assert.notEqual(createdVideos, videoElements);
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