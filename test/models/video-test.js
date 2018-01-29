const {assert} = require('chai');
const {mongoose, databaseUrl, options} = require('../../database');

const Video = require('../../models/video');
async function connectDatabase() {
  await mongoose.connect(databaseUrl, options);
  await mongoose.connection.db.dropDatabase();
}

async function disconnectDatabase() {
  await mongoose.disconnect();
}

module.exports = {
  connectDatabase,
  disconnectDatabase,
}

describe('MODEL TEST', () => {

  //setup and teardown
  beforeEach(connectDatabase);
  afterEach(disconnectDatabase);

  it('checks that video model title is a string', async () => {
    //set up
    const myVideo = {
      title: 3,
      description: 'This is my video'
    };
    // exercise
    const createdVideo = await Video.create(myVideo);
    // assert
    assert.strictEqual(createdVideo.title, (createdVideo.title).toString());
  });
});