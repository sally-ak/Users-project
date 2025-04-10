// test/users.test.js
require('dotenv').config({ path: '.env.test' });
const request = require('supertest');
const app = require('../index');
const { expect } = require('chai');

describe('API /api/users', () => {
  it('devrait retourner un tableau d\'utilisateurs', (done) => {
    request(app)
      .get('/api/users')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
