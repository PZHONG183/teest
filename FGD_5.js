// gasCalculations.js
window.gasCalculations = {
    findClosestRowValue: function(temp, rows = [100, 200, 300, 400, 500, 600, 700, 800]) {
        return rows.reduce((prev, curr) => (Math.abs(curr - temp) < Math.abs(prev - temp) ? curr : prev));
    },

    findRowValues: function(row, table) {
        return table[row] || null;
    },

    P_sat_check: function(T, T_out, P, FV, gasComposition) {
        // 实现饱和压力的计算逻辑
        // 根据实际逻辑进行完善
        console.log("P_sat_check function called with T:", T, "and T_out:", T_out);
        // 返回计算结果
    },

    // 可以添加更多通用计算逻辑...
};
