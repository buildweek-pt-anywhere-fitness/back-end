const request = require('supertest')
const server = require('./server')
const db = require('../data/db-config');

const testClient = { username: "example-user", password: "example"};
const testClass = {
    name: 'Fast Fitness',
    type: 'Crossfit',
    start_time: '8:00 a.m',
    duration: '1 hour',
    intensity_level: 'Beginner',
    location: 'Park',
    registered: 15,
    max_class_size: 25
  }

describe('server.js', () => {
    
    describe('GET Request', () => {
        it('Should return JSON', async () => {
            const res = await request(server).get('/api/users')
            expect(res.type).toBe('application/json')
        })
    })

    describe('Registering new user', () => {
        it('Should return a status code of 201 when adding a new user', async () => {
            await db('users').truncate()
            const res = await request(server)
            .post('/api/users/register')
            .send(testClient)
            expect(res.status).toBe(201)
        })
        it('Should return a status of 500 with an invalid user', async () => {
            const res = await request(server)
            .post('/api/users/register')
            .send({ user: 'testing', password: 'pass'})
            expect(res.status).toBe(500)
        })
    })
})