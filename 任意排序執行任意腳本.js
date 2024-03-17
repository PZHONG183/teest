<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Script Execution Order Example</title>
</head>
<body>
    输入初始值：<input type="number" id="initialValue" placeholder="Enter initial value"><br>
    脚本执行顺序：<br>
    <select id="scriptDropdown1">
        <option value="">选择</option>
        <option value="https://pzhong183.github.io/teest/scriptA.js">Script A</option>
        <option value="https://pzhong183.github.io/teest/scriptB.js">Script B</option>
        <option value="https://pzhong183.github.io/teest/scriptC.js">Script C</option>
        <option value="https://pzhong183.github.io/teest/scriptD.js">Script D</option>
    </select>
    <select id="scriptDropdown2">
        <option value="">选择</option>
        <option value="https://pzhong183.github.io/teest/scriptA.js">Script A</option>
        <option value="https://pzhong183.github.io/teest/scriptB.js">Script B</option>
        <option value="https://pzhong183.github.io/teest/scriptC.js">Script C</option>
        <option value="https://pzhong183.github.io/teest/scriptD.js">Script D</option>
    </select>
    <select id="scriptDropdown3">
        <option value="">选择</option>
        <option value="https://pzhong183.github.io/teest/scriptA.js">Script A</option>
        <option value="https://pzhong183.github.io/teest/scriptB.js">Script B</option>
        <option value="https://pzhong183.github.io/teest/scriptC.js">Script C</option>
        <option value="https://pzhong183.github.io/teest/scriptD.js">Script D</option>
    </select>
    <select id="scriptDropdown4">
        <option value="">选择</option>
        <option value="https://pzhong183.github.io/teest/scriptA.js">Script A</option>
        <option value="https://pzhong183.github.io/teest/scriptB.js">Script B</option>
        <option value="https://pzhong183.github.io/teest/scriptC.js">Script C</option>
        <option value="https://pzhong183.github.io/teest/scriptD.js">Script D</option>
    </select>
    <button onclick="executeScripts()">执行</button>
    <div id="result">结果显示在这里</div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // 初始化下拉菜单操作如果需要的话
        });

        function loadScript(src, callback) {
            const script = document.createElement('script');
            script.src = src;
            script.onload = callback;
            script.onerror = () => console.error(`Failed to load script: ${src}`);
            document.head.appendChild(script);
        }

        function executeScripts() {
            let input = Number(document.getElementById('initialValue').value);
            let scriptsToLoad = [];

            // 收集需要加载的脚本URL
            for (let i = 1; i <= 4; i++) { // 对应四个下拉菜单
                let dropdownValue = document.getElementById(`scriptDropdown${i}`).value;
                if (dropdownValue) {
                    scriptsToLoad.push(dropdownValue);
                }
            }

            const executeNext = (index) => {
                if (index < scriptsToLoad.length) {
                    loadScript(scriptsToLoad[index], () => {
                        // 从URL提取文件名作为函数名后缀
                        let scriptNameSuffix = scriptsToLoad[index].match(/script([A-D])\.js$/)[1];
                        if (scriptNameSuffix && typeof window[`execute${scriptNameSuffix}`] === 'function') {
                            input = window[`execute${scriptNameSuffix}`](input);
                            document.getElementById('result').textContent = "当前结果：" + input;
                            executeNext(index + 1); // 加载并执行下一个脚本
                        } else {
                            console.error('Execute function not found for script', scriptNameSuffix);
                        }
                    });
                } else {
                    console.log("All scripts executed. Final result:", input);
                    document.getElementById('result').textContent = "最终结果：" + input;
                }
            };

            executeNext(0); // 从第一个脚本开始执行
        }
    </script>
</body>
</html>
