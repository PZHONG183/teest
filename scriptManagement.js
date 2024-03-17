document.addEventListener('DOMContentLoaded', function() {
    initializeDropdowns();
});

// 初始化下拉菜单选项
function initializeDropdowns() {
    const funcs = ['A', 'B', 'C', 'D'];
    for (let i = 1; i <= 2; i++) { // 根据实际下拉菜单数量调整
        const dropdown = document.getElementById(`scriptDropdown${i}`);
        dropdown.innerHTML = '<option value="">选择</option>' + funcs.map(f => `<option value="script${f}.js">Script ${f}</option>`).join('');
    }
}

// 动态加载脚本并执行
function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => callback();
    script.onerror = () => console.error(`Failed to load script: ${src}`);
    document.head.appendChild(script);
}

function executeScripts() {
    let input = Number(document.getElementById('initialValue').value);
    let scriptsToLoad = [];

    // 收集需要加载的脚本
    for (let i = 1; i <= 2; i++) { // 根据实际下拉菜单数量调整
        let src = document.getElementById(`scriptDropdown${i}`).value;
        if (src) {
            scriptsToLoad.push(src);
        }
    }

    // 递归函数来顺序执行脚本
    function loadAndExecute(index) {
        if (index < scriptsToLoad.length) {
            loadScript(scriptsToLoad[index], () => {
                if (typeof execute === 'function') {
                    input = execute(input);
                    document.getElementById('result').textContent = "当前结果：" + input;
                    loadAndExecute(index + 1); // 加载并执行下一个脚本
                } else {
                    console.error('Execute function not found in ' + scriptsToLoad[index]);
                }
            });
        } else {
            console.log("All scripts executed. Final result: " + input);
            document.getElementById('result').textContent = "最终结果：" + input;
        }
    }

    loadAndExecute(0);
}
