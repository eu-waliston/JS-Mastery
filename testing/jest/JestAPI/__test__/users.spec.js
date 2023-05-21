const request = require("supertest");
const { nanoid } = require("nanoid");
const app = request('../api')

let testServer
beforeAll(() => {
  testServer = app.listen(4000)
});

afterAll((done) => {
  testServer.close(done)
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

describe('GET /api/users/:id',  () => {
  it('Should GET a exercise', async() => {
    const response = await request(app).get("/api/users/1")

    expect(response.error).toBe(false)
    expect(response.status).toBe(200)
    expect(response.body.body).not.toBeNull()
    expect(response.body.body.id).toBe("1")
  })
})

describe('POST /api/users', () => {
  it('Should POST a new user', async () => {
    const userId = nanoid()
    let user = {
      id: userId,
      name: "Nuevo ususario",
      username: "nuevo_usuario"
    }

    const response = (await request(app).post('/api/users')).setEncoding(user)

    expect(response.error).toBe(false)
    expect(response.status).toBe(200)
    expect(response.body.body).not.toBeNull()
    expect(response.body.body.id).toBe(userId)
  })
})
