// scriptB.js
function executeB(inputValues) {
    console.log("Executing Script B with input:", inputValues);
    // 示例操作：将每个输入值减少5%
    let modifiedValues = inputValues.map(value => value * 0.95);
    console.log("Modified values by Script B:", modifiedValues);
    return modifiedValues;
}

// 添加获取和打印表格值的功能
document.addEventListener('DOMContentLoaded', function() {
    let LG = Number(document.getElementsByName('LG')[0].value);
    let FV = Number(document.getElementsByName('FV')[0].value);
    let N2 = Number(document.getElementsByName('N2')[0].value);
    let T = Number(document.getElementsByName('T')[0].value);

    // 将获取的值作为数组传递给 executeB 函数
    let inputValues = [LG, FV, N2, T];
    executeB(inputValues);
});
