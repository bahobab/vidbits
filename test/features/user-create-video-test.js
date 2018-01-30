const { assert} = require('chai');

describe('user creates video', () => {
    describe('post new video', () => {
        it('renders posted video', () => {
            // setup: navigate to the create video page
            browser.url('/videos/create');
            // set up video properties
            const videoTitle = 'title';
            const videoDescription = 'description';
            browser.setValue('#title', videoTitle);
            browser.setValue('#description', videoDescription);
            
            // exercise: click to submit creation
            browser.click('#createVideoSubmit');
            
            // assert: user can see created video on page
            assert.include(browser.getText('body'), videoTitle);
            assert.include(browser.getText('body'), videoDescription);
        });
    });
});