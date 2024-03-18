// externalScript.js
document.addEventListener('DOMContentLoaded', function() {
    // 确保DOM完全加载后再尝试获取元素
    var flowVolumeElement = document.getElementsByName('FV')[0]; // 获取FLOW VOLUME输入框
    var flowVolume = flowVolumeElement.value; // 获取输入框的值

    console.log("FLOW VOLUME, Nm3/hr:", flowVolume); // 打印获取的值

    // 这里可以根据需要对flowVolume进行进一步处理
    // 例如: 更新其他元素的值或执行某些计算
});
