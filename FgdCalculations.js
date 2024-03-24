window.gasCalculations = {
    data: [
        ['25', '20'],
        ['45', '40']
    ],
    tableData: {
        100: {'N2': 0.311, 'O2': 0.315, 'CO2': 0.409, 'H2O': 0.36, 'CO': 0.312, 'SO2': 0.435, 'NO2': 0.319, 'HCL': 0.311, 'H2S': 0.373},
        200: {'N2': 0.312, 'O2': 0.32, 'CO2': 0.429, 'H2O': 0.364, 'CO': 0.313, 'SO2': 0.454, 'NO2': 0.321, 'HCL': 0.311, 'H2S': 0.381},
        300: {'N2': 0.313, 'O2': 0.325, 'CO2': 0.447, 'H2O': 0.369, 'CO': 0.316, 'SO2': 0.47, 'NO2': 0.323, 'HCL': 0.313, 'H2S': 0.389},
        400: {'N2': 0.316, 'O2': 0.33, 'CO2': 0.463, 'H2O': 0.374, 'CO': 0.319, 'SO2': 0.483, 'NO2': 0.327, 'HCL': 0.315, 'H2S': 0.398},
        500: {'N2': 0.319, 'O2': 0.334, 'CO2': 0.477, 'H2O': 0.38, 'CO': 0.322, 'SO2': 0.495, 'NO2': 0.33, 'HCL': 0.317, 'H2S': 0.407},
        600: {'N2': 0.321, 'O2': 0.339, 'CO2': 0.49, 'H2O': 0.386, 'CO': 0.326, 'SO2': 0.506, 'NO2': 0.334, 'HCL': 0.32, 'H2S': 0.417},
        700: {'N2': 0.325, 'O2': 0.343, 'CO2': 0.501, 'H2O': 0.392, 'CO': 0.329, 'SO2': 0.515, 'NO2': 0.337, 'HCL': 0.322, 'H2S': 0.426},
        800: {'N2': 0.329, 'O2': 0.347, 'CO2': 0.512, 'H2O': 0.399, 'CO': 0.332, 'SO2': 0.523, 'NO2': 0.34, 'HCL': 0.324, 'H2S': 0.434}
    },
    findClosestRowValue: function(temp) {
        let rows = Object.keys(this.tableData).map(Number);
        return rows.reduce((prev, curr) => (Math.abs(curr - temp) < Math.abs(prev - temp) ? curr : prev));
    },
    findRowValues: function(row) {
        return this.tableData[row] || null;
    },
calculateGas: function(gasName, gasPercent, FV, T, T_out) {
    var M = { // 分子量
        'N2': 28.02,
        'O2': 32.0,
        'CO2': 44.01,
        'SO2': 64.06,
        'NO2': 46.0005,
        'HCL': 36.5,
        'H2S': 34.0,
        'H2O': 18.02,
        'CO': 28,
        // 添加其他氣體分子量
    };

    // 對特定氣體進行百分比調整
    var adjustedPercent = gasPercent;
    if (gasName === 'SO2' || gasName === 'NO2' || gasName === 'HCL' || gasName === 'H2S') {
        adjustedPercent *= 0.0001; // 對SO2, NO2, HCL, H2S的百分比進行調整
    }

    var volume_gas = FV * adjustedPercent / 100; // Volume of gas in Nm3/hr
    var mole_flow_gas = volume_gas / 22.4;
    var kg_flow_gas = mole_flow_gas * M[gasName]; // Kg flow of gas

    var rowDataT = this.findRowValues(this.findClosestRowValue(T));
    var rowDataT_out = this.findRowValues(this.findClosestRowValue(T_out));

    var cp_gas_in = parseFloat(rowDataT[gasName]);
    var cp_gas_out = parseFloat(rowDataT_out[gasName]);

    return [adjustedPercent, volume_gas, kg_flow_gas, cp_gas_in, cp_gas_out, mole_flow_gas ];
},
Gas_out_composition: function(Gas_composition, FV, T, T_out, P, DE_SOX, DE_NOX, DE_HCL, DE_H2S  ) {    // 需修改
    var results = {}; // 正确初始化results对象
    var totalPercentExcludingCO = 0; // 初始化排除CO的百分比总和

    // 计算除CO外的各成分
    for (var gasName in Gas_composition) {
        if (Gas_composition.hasOwnProperty(gasName) && gasName !== 'CO') { // 排除CO
            var gasPercent = Gas_composition[gasName];
            var gasResult = this.calculateGas(gasName, gasPercent, FV, T, T_out);
            results[gasName] = gasResult;
            totalPercentExcludingCO += gasResult[0];
        }
    }

    // 计算CO的百分比，假定总和为100%
    var coPercent = 100 - totalPercentExcludingCO;
    if (coPercent < 0) {
        console.error("Error: The sum of gas percentages exceeds 100%");
        coPercent = 0; // 避免负百分比
    } else {
        // 为CO计算体积流量及其他参数，仅当coPercent为正数时执行
        results['CO'] = this.calculateGas('CO', coPercent, FV, T, T_out);
    }

    // 之后的代码保持不变
    var CP_in = 0;
    var H_tot_drop = 0; // 重新初始化，因为我们会重新计算它
    for (var gasName in results) {
        var gasResult = results[gasName];
        CP_in += gasResult[0] * gasResult[3]; // 体积流量 * 入口比热
        // 注意：现在包括了CO在内的所有气体
        H_tot_drop += gasResult[1] * gasResult[4] * T_out; // 质量流量 * 出口比热 * 出口温度
    }
    CP_in /= 100; // 根据定义进行调整
    var H_tot_in = FV * CP_in * T; // 总入口热量
    var delta_H = H_tot_in - H_tot_drop; // 热量变化
    var makeup_water = delta_H / 560;// ...计算makeup_water...
    var makeup_water_mole = makeup_water / 18.02 ;// ...计算makeup_water_mole...
    // 返回计算结果
    //以下計算飽和蒸汽壓
    const a = 8.07131;
    const b = 1730.63;
    const c = 233.426;
    const log10P = a - (b / (c + T_out));
    const P_sat = Math.pow(10, log10P) * 0.1333;//kpa
    const mass_P_sat = 18.02 * P_sat * 1000 / (8.3145*(T_out + 273.15)) ;
    const percent_P = P_sat * 100 / P ;

    const T_expansion = (T_out + 273.15)/273;
    const gas_mass_psat = FV * T_expansion * mass_P_sat /1000;//kg/hr
    const gas_mole_psat = gas_mass_psat /18.02 ;//kmole/hr
    var mole_tot_in = 0,  mole_tot_out = 0 ,  H2O_coldown = 0,  P_sat_result =0;
    for (var gasName in results) {
        mole_tot_in += results[gasName][5];
        mole_tot_out = mole_tot_in + makeup_water_mole;   //需修改
        percent_P_2 = 100* (makeup_water_mole + results['H2O'][5]) / mole_tot_out ; 

    if (percent_P_2 < percent_P) {
        P_sat_result = percent_P_2;
        mole_tot_out = mole_tot_in + makeup_water_mole;
        H2O_coldown = 0;
    } else {
        P_sat_result = percent_P;
        mole_tot_out = (mole_tot_in - results['H2O'][5]) + gas_mole_psat;
        H2O_coldown = makeup_water - (gas_mass_psat -results['H2O'][2]);
    }
    }
    var SO2_remove =0, NO2_remove=0, HCL_remove=0, H2S_remove=0;//需修改
        SO2_remove = DE_SOX * results['SO2'][5];
        NO2_remove = DE_NOX * results['NO2'][5];
        HCL_remove = DE_HCL * results['HCL'][5];
        H2S_remove = DE_H2S * results['H2S'][5];
    var N2_out=0, O2_out=0, CO2_out=0, CO_out=0, SO2_out=0, NO2_out=0, HCL_out=0, H2S_out=0;
        N2_out = 100* results['N2'][5] / mole_tot_out ;
        O2_out = 100* results['O2'][5] / mole_tot_out ;
        CO2_out = 100* results['CO2'][5] / mole_tot_out ;
        CO_out = 100* results['CO'][5] / mole_tot_out ;
        SO2_out = 100* ((1-DE_SOX/100)*results['SO2'][5]) / mole_tot_out ;
        NO2_out = 100* ((1-DE_NOX/100)*results['NO2'][5]) / mole_tot_out ;
        HCL_out = 100* ((1-DE_HCL/100)*results['HCL'][5]) / mole_tot_out ;
        H2S_out = 100* ((1-DE_H2S/100)*results['H2S'][5]) / mole_tot_out ;
    var H_tot_out= 0, CP_out= 0, gas_flow_out= 0 , delta_H_2= 0;
         CP_out = (N2_out   * results['N2'][4]   + O2_out       * results['O2'][4]  + CO2_out * results['CO2'][4] + 
                  CO_out   * results['CO'][4]   + SO2_out      * results['SO2'][4] + NO2_out * results['NO2'][4] + HCL_out * results['HCL'][4] +
                  H2S_out  * results['H2S'][4]  + P_sat_result * results['H2O'][4] ) /100;    
         gas_flow_out = mole_tot_out *22.4;//Nm3/hr
         H_tot_out = gas_flow_out* CP_out* T_out;
         delta_H_2 = H_tot_out - H_tot_in;
    return {
        result_tot: results,
        CP_in: CP_in,
        H_tot_in: H_tot_in,
        H_tot_drop: H_tot_drop,
        delta_H: delta_H,
        coPercent:coPercent,
        totalPercentExcludingCO:totalPercentExcludingCO,
        percent_P_2:percent_P_2,
        percent_P:percent_P,
        makeup_water:makeup_water,
        P_sat_result:P_sat_result,
        mole_tot_out:mole_tot_out,
        H2O_coldown:H2O_coldown,
        CP_out:CP_out,
        gas_flow_out:gas_flow_out,
        H_tot_out:H_tot_out,
        delta_H_2:delta_H_2
    };
}


};
