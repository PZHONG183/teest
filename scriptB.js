window.executescriptB = function(LG, FV, N2, T) {
    console.log("Executing Script B with input:", LG, FV, N2, T);
    // 示例操作：将 N2 减少 5%
    N2 = N2 * 0.95;
    LG = LG -1;
    console.log("Executing Script B with output:", LG, FV, N2, T);
    return [LG, FV, N2, T];
};
