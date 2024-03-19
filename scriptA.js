// scriptA.js
// scriptA.js
window.executescriptA = function(LG, FV, N2, T) {
    console.log("Executing Script A with input:", LG, FV, N2, T);
    // 示例操作：将 FV 增加 10%
    LG = LG * 1.1;
    console.log("Executing Script A with output:", LG, FV, N2, T);
    return [LG, FV, N2, T];
};
