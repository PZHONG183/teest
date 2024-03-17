function funcA(input) {
    console.log("Function A executed with input:", input);
    return input + 2;
}

function execute(input) {
    return funcA(input);
}

// scriptA.js
window.executeA = function(input) {
    console.log("Executing Script A with input:", input);
    return input + 2;
};

