const request = require('supertest');
const app = require('./app');

describe('Baby Name Generator API', () => {
    test('GET /boy should return a boy name', async () => {
        const response = await request(app).get('/boy');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('name');
        expect(['Liam', 'Noah', 'James', 'Lucas', 'Benjamin']).toContain(response.body.name);
    });

    test('GET /girl should return a girl name', async () => {
        const response = await request(app).get('/girl');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('name');
        expect(['Emma', 'Olivia', 'Sophia', 'Isabella', 'Mia']).toContain(response.body.name);
    });

    test('GET /generate should return a random name', async () => {
        const response = await request(app).get('/generate');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('name');
        expect(['Liam', 'Noah', 'James', 'Lucas', 'Benjamin', 'Emma', 'Olivia', 'Sophia', 'Isabella', 'Mia']).toContain(response.body.name);
    });
});
