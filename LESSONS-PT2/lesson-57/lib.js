//Name Exports and Imports

const BRAND = {
    brand: 'We Santos',
    webiste: 'wesantosdev.com'
}

// export const add = (a,b) => a + b
// export const sub = (a,b) => a - b

const add = (a,b) => a + b
const sub = (a,b) => a - b

export {
    add,
    sub,
    BRAND as brand
}

export default BRAND;