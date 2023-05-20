const { carsList, brandsList } = require('../src/array');

describe('verificando las marcas existesntes', () => {

    test('Que el arreglo no sea null', () => {
        expect(brandsList()).not.toBeNull();
    })
})

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