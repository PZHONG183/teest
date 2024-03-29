// scriptA.js
// scriptA.js
window.executeA = function(LG, FV, T) {
    console.log("Executing Script A with input:", LG, FV, T);
    // 示例操作：将 FV 增加 10%
    LG = LG * 1.1;
    console.log("Executing Script A with output:", LG, FV, T);
    return {
     LG : LG,
     FV : FV,
       T: T
   };
};
