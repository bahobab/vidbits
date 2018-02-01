const {jsdom} = require('jsdom');
const Video = require('../models/video');

const parseTextFromHTML = (htmlAsString, selector) => {
    const selectedElement = jsdom(htmlAsString).querySelector(selector);
    if (selectedElement != null) {
        return selectedElement.textContent;
    } else {
        throw new Error(`No element with selecto ${selector} found in HTML`);
    }
}

module.exports = {parseTextFromHTML};