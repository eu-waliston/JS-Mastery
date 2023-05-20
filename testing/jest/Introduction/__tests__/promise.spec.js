const getData = require("../src/promise");
const API = "https://v2.jokeapi.dev/joke/Any";

it("deberia retornar la informacion Joke", () => {
    return getData(API).then( res => {
        console.log(res.data);
        expect(res.data).toBe(res.data);
    })
});


it("Deberia fallar por URl invalida", () => {
    expect.assertions(1)
    return getData('www.videos.com.br.es').catch( (err) => {
        expect(err).not.toBeNull();
    })
})