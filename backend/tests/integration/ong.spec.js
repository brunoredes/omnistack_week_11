const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/index');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new NGO', async () => {
    const res = await request(app).post('/ongs').send({
      name: 'Ong Teste',
      email: 'contato@ong.com.br',
      whatsapp: '11912345678',
      city: 'Sao Paulo',
      uf: 'SP',
    });

    expect(res.body).toHaveProperty('id');
    expect(res.body.id).toHaveLength(8);
  });
});
