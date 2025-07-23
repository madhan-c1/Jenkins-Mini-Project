// test/app.test.js
const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hello from CI/CD Node.js App!'));

describe('GET /', () => {
  it('should return hello message', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello from CI/CD Node.js App!');
  });
});
