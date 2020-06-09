const request = require('supertest');
const app = require('../lib/app');

describe('the application', () => {
  it('returns plaintext \'hi\' on GET to \'/\' ', () => {
    return request(app)
      .get('/')
      .then(res => expect(res.text).toEqual('hi'));
  });
  it('returns h1 \'red\' on GET to \'/red\' ', () => {
    return request(app)
      .get('/red')
      .then(res => expect(res.text).toEqual('<h1>red</h1>'));
  });
  it('returns h1 \'blue\' on GET to \'/blue\' ', () => {
    return request(app)
      .get('/blue')
      .then(res => expect(res.text).toEqual('<h1>blue</h1>'));
  });
  it('returns h1 \'green\' on GET to \'/green\' ', () => {
    return request(app)
      .get('/green')
      .then(res => expect(res.text).toEqual('<h1>green</h1>'));
  });
  it('returns request body on POST to \'/echo\' ', () => {
    return request(app)
      .post('/echo')
      .send('Echo, echo, echo')
      .then(res => expect(res.text).toEqual('Echo, echo, echo'));
  });
});
