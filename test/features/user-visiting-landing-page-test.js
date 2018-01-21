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
});