export function executeA(LG, FV, T) {
    console.log("Executing Script A with input:", LG, FV, T);
    LG = LG * 1.1; // 示例操作：将 LG 增加 10%
    console.log("Executing Script A with output:", LG, FV, T);
    return { LG, FV, T };
}

// 同时将函数赋值给window对象，使其在全局作用域下可用
window.executeA = executeA;
