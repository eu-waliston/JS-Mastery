const { carsList } = require('../src/array');

describe('Verificando los autos existentes', () => {

    test('Que el arreglo no sea null', () => {
        expect(carsList()).not.toBeNull()
    })

    test('Verificar si contiene un VW Golf', () => {
        expect(carsList()).toContain('VW Golf GTI')
    })

    test('Comprobrar la longitud del arreglo', () => {
        expect(carsList()).toHaveLength(4)
    })
})