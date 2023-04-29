//Try catch finally
const json = '{"brand" "waliston code" }';

try {
    console.log(JSON.parse(json));
} catch (error) {
    console.log("Opps can't parse json: " + error);
}
