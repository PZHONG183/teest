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

    return [volume_gas, kg_flow_gas, cp_gas_in, cp_gas_out, mole_flow_gas];
},

Gas_out_composition: function(Gas_composition, FV, T, T_out) {
    var results = {};
    for (var gasName in Gas_composition) {
        if (Gas_composition.hasOwnProperty(gasName)) {
            var gasPercent = Gas_composition[gasName];
            results[gasName] = this.calculateGas(gasName, gasPercent, FV, T, T_out);
        }
    }
    return results;
}

  
    };
