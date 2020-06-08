const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('returns plaintext \'hi\' on GET to \'\\\' ', () => {
    return request(app)
      .get('/')
      .send('test body')
      .then(res => console.log(res.text));
  });
});
