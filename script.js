function updateDropdowns(changedId) {
    // 先收集所有当前选中的值
    let selectedValues = [];
    for (let i = 1; i <= 4; i++) {
        let value = document.getElementById('dropdown' + i).value;
        if (value) {
            selectedValues.push(value);
        }
    }

    // 更新每个下拉菜单的选项，排除已选择的值
    const funcs = ['A', 'B', 'C', 'D'];
    for (let i = 1; i <= 4; i++) {
        let dropdown = document.getElementById('dropdown' + i);
        let currentValue = dropdown.value;
        dropdown.innerHTML = `<option value="">选择</option>`; // 重置选项

        funcs.forEach(func => {
            // 如果当前函数未被选中，或者是当前下拉菜单已选中的值，则将其添加为选项
            if (!selectedValues.includes(func) || func === currentValue) {
                dropdown.innerHTML += `<option value="${func}">${func}</option>`;
            }
        });
    }
}
