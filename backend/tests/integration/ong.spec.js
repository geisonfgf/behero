const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        await request(app)
            .post('/ongs')
            .send({
                "name": "APAD2",
                "email": "contato@gmail.com",
                "whatsapp": "47999999999",
                "city": "teste",
                "uf": "SC"
            })
            .expect(200)
            .then(response => {
                expect(response.body).toHaveProperty('id');
                expect(response.body.id).toHaveLength(8);
            });
    });
});