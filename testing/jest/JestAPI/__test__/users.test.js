const request = require("supertest");
const app = require("../api/index");
const { nanoid } = require("nanoid");

describe('GET /api/users', () => {
    it('should return all users', async () => {
        const response = await request(app).get('api/users');

        expect(response.error).toBe(false)
        expect(response.status).toBe(200)
        expect(response.body.body).not.toBeNull()
        expect(Array.isArray(response.body.body)).toBe(true)
        expect(response.body.body.length).toBe(2)
    })
})
