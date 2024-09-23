const request = require('supertest');
const app = require('../app'); // El servidor de Express
let server;

beforeAll(() => {
  server = app.listen(2000);  // Cambia el puerto solo para las pruebas si es necesario
});

afterAll(() => {
  server.close();  // Cierra el servidor después de todas las pruebas
});
describe('GET /api/items', () => {
  it('debería devolver una lista de items', async () => {
    const response = await request(app).get('/api/items');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
