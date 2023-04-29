//Error Object and List of Errors

const json = '{"brand" "waliston code" }';

try {
    console.log(JSON.parse(json));
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
