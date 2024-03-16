// 初始化下拉菜单选项
function initializeDropdowns() {
    const funcs = ['A', 'B', 'C', 'D'];
    for (let i = 1; i <= 4; i++) {
        const dropdown = document.getElementById('dropdown' + i);
        dropdown.innerHTML = '<option value="">选择</option>' + funcs.map(f => `<option value="${f}">${f}</option>`).join('');
    }
}
initializeDropdowns();

// 更新下拉菜单
function updateDropdowns(changedId) {
    // 省略之前示例中的 updateDropdowns 函数实现，此函数用于更新下拉菜单选项
}

// 执行函数
function executeFunctions() {
    let input = Number(document.getElementById('initialValue').value);
    const order = [];
    for (let i = 1; i <= 4; i++) {
        const value = document.getElementById('dropdown' + i).value;
        if (value) order.push(value);
    }

    // 根据顺序执行函数
    order.forEach(func => {
        switch (func) {
            case 'A': input = funcA(input); break;
            case 'B': input = funcB(input); break;
            case 'C': input = funcC(input); break;
            case 'D': input = funcD(input); break;
        }
    });

    // 显示结果
    document.getElementById('result').textContent = "最终结果：" + input;
}
