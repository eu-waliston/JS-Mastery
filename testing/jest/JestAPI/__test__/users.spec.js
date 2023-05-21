const request = require("supertest");
const { nanoid } = require("nanoid");
const app = request('../api')

let testServer
beforeAll(() => {
  testServer = app.listen(4000);
});

afterAll((done) => {
  testServer.close(done);
});

describe("GET /api/users", () => {
  it("should return all users", async () => {
    const response = await request(app).get('api/users');

    expect(response.error).toBe(false);
    expect(response.status).toBe(200);
    expect(response.body.body).not.toBeNull();
    expect(Array.isArray(response.body.body)).toBe(true);
    expect(response.body.body.length).toBe(2);
  });
});
