function funcB(input) {
    console.log("Function B executed with input:", input);
    return input * 3;
}
function execute(input) {
    return funcB(input);
}
window.executeB = function(input) {
    console.log("Executing Script B with input:", input);
    return input * 3;
};
