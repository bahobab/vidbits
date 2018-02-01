const {jsdom} = require('jsdom');
const Video = require('../models/video');

// const parseTextFromHTML = (htmlAsString, selector) => {
//     const selectedElement = jsdom(htmlAsString).querySelector(selector);
//     if (selectedElement !== null) {
//         return selectedElement.textContent;
//     } else {
//         throw new Error(`No element with selecto ${selector} found in HTML`);
//     }
// }

const parseTextFromHTML = (htmlAsString, selector) => {
    const selectedElement = jsdom(htmlAsString).querySelector(selector);
    if (selectedElement !== null) {
      return selectedElement.textContent;
    } else {
      throw new Error(`No element with selector ${selector} found in HTML string`);
    }
  };

const buildVideoItem = (options = {}) => {
    const title = options.title || 'my kool video';
    const description = options.description || 'lunar eclipse';
    return {title, description};
}

module.exports = {parseTextFromHTML, buildVideoItem};