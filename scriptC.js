function funcC(input) {
    console.log("Function C executed with input:", input);
    return input - 4;
}
function execute(input) {
    return funcC(input);
}
window.executeC = function(input) {
    console.log("Executing Script C with input:", input);
    return input - 4;
};
