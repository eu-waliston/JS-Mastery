const fetchAPI = require("../src/callback");

it('deberia retornar la informacion', () => {
    const API = 'https://dragon-ball-api.herokuapp.com/api'

    function callback(err, data) {
        try {
            expect(err).toBeNull()
            expect(data).not.toBeNull()

            expect(data.name).toBe("Goku")
            done()
        } catch (error) {
            done(err)
        }
    }

    fetchAPI(API, callback)
})