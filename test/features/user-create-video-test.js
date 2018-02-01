const { assert} = require('chai');
const {buildVideoItem} = require('../test-utils');

describe('user creates video', () => {
    describe('post new video', () => {
        it('renders posted video', () => {
            // setup: navigate to the create video page
            browser.url('/videos/create');
            // set up video properties
            const video = buildVideoItem();
            browser.setValue('#title', video.title);
            browser.setValue('#description', video.description);
            
            // exercise: click to submit creation
            browser.click('#createVideoSubmit');
            // browser.url('/');
            
            // assert: user can see created video on page
            assert.include(browser.getText('body'), video.title);
            assert.include(browser.getText('body'), video.description);
        });
    });
});