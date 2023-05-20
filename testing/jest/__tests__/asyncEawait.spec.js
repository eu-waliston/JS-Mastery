const getData = require("../src/promise");
const API = "https://v2.jokeapi.dev/joke/Any";

it("deberia retonar la informacion de Joke", async () => {
    const response = await getData(API);

    expect(response.data).toBe(response.data);
});

it("deberia fallar el test com una URL invalida", async () => {
    try {
        await getData('www.hty.com')
    } catch (error) {
        expect(error).not.toBeNull();
    }
})