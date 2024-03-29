  var T = parseFloat(document.getElementsByName('T')[0].value) || 0;
  var T_out = parseFloat(document.getElementsByName('T_out')[0].value) || 0;
  
  var N2 = parseFloat(document.getElementsByName('N2')[0].value) || 0;
  var O2 = parseFloat(document.getElementsByName('O2')[0].value) || 0;
  var CO2 = parseFloat(document.getElementsByName('CO2')[0].value) || 0;
  var H2O = parseFloat(document.getElementsByName('H2O')[0].value) || 0;
  var SO2 = parseFloat(document.getElementsByName('SO2')[0].value) || 0;
  var NO2 = parseFloat(document.getElementsByName('NO2')[0].value) || 0;
  var HCL = parseFloat(document.getElementsByName('HCL')[0].value) || 0;
  var H2S = parseFloat(document.getElementsByName('H2S')[0].value) || 0;
  var demister = parseFloat(document.getElementsByName('demister')[0].value) || 0;
  var demister_time = parseFloat(document.getElementsByName('demister_time')[0].value) || 0;
  var demister_number = parseFloat(document.getElementsByName('demister_number')[0].value) || 0;
  var drug_T = parseFloat(document.getElementsByName('drug_T')[0].value) || 0;
  var demister_T = parseFloat(document.getElementsByName('demister_T')[0].value) || 0;

 
  var DE_SOX = parseFloat(document.getElementsByName('DE_SOX')[0].value) || 0;
  var DE_NOX = parseFloat(document.getElementsByName('DE_NOX')[0].value) || 0;
  var DE_HCL = parseFloat(document.getElementsByName('DE_HCL')[0].value) || 0;
  var DE_H2S = parseFloat(document.getElementsByName('DE_H2S')[0].value) || 0;  
    
  var P = parseFloat(document.getElementsByName('P')[0].value) || 0;
  var FV = parseFloat(document.getElementsByName('FV')[0].value) || 0;

  var closestT = findClosestRowValue(T);
  var closestT_out = findClosestRowValue(T_out);



export const data = [
  ['25', '20'],
  ['45', '40'],
];

export const tableData = {
  100: {'N2': 0.311, 'O2': 0.315, 'CO2': 0.409, 'H2O': 0.36, 'CO': 0.312, 'SO2': 0.435, 'NO2': 0.319, 'HCL': 0.311, 'H2S': 0.373},
    200: {'N2': 0.312, 'O2': 0.32, 'CO2': 0.429, 'H2O': 0.364, 'CO': 0.313, 'SO2': 0.454, 'NO2': 0.321, 'HCL': 0.311, 'H2S': 0.381},
    300: {'N2': 0.313, 'O2': 0.325, 'CO2': 0.447, 'H2O': 0.369, 'CO': 0.316, 'SO2': 0.47, 'NO2': 0.323, 'HCL': 0.313, 'H2S': 0.389},
    400: {'N2': 0.316, 'O2': 0.33, 'CO2': 0.463, 'H2O': 0.374, 'CO': 0.319, 'SO2': 0.483, 'NO2': 0.327, 'HCL': 0.315, 'H2S': 0.398},
    500: {'N2': 0.319, 'O2': 0.334, 'CO2': 0.477, 'H2O': 0.38, 'CO': 0.322, 'SO2': 0.495, 'NO2': 0.33, 'HCL': 0.317, 'H2S': 0.407},
    600: {'N2': 0.321, 'O2': 0.339, 'CO2': 0.49, 'H2O': 0.386, 'CO': 0.326, 'SO2': 0.506, 'NO2': 0.334, 'HCL': 0.32, 'H2S': 0.417},
    700: {'N2': 0.325, 'O2': 0.343, 'CO2': 0.501, 'H2O': 0.392, 'CO': 0.329, 'SO2': 0.515, 'NO2': 0.337, 'HCL': 0.322, 'H2S': 0.426},
    800: {'N2': 0.329, 'O2': 0.347, 'CO2': 0.512, 'H2O': 0.399, 'CO': 0.332, 'SO2': 0.523, 'NO2': 0.34, 'HCL': 0.324, 'H2S': 0.434}
};

export function findClosestRowValue(temp) {
  const rows = [100, 200, 300, 400, 500, 600, 700, 800];

  return rows.reduce((prev, curr) => (Math.abs(curr - temp) < Math.abs(prev - temp) ? curr : prev));
}

export function findRowValues(row, table) {
  return table[row] || null;
}


export function FN2(N2, FV, rowDataT, rowDataT_out) {
    var M_N2 = 28.02; // Molecular weight of O2
    var percent_N2 = N2;
    var volume_N2 = FV * N2 / 100; // Volume of O2 in Nm3/hr
    var mole_flow_N2 = volume_N2 / 22.4;
    var kg_flow_N2 = volume_N2 / 22.4 * M_N2; // Molar flow of O2
    // Assuming you want to use a value related to T_out from rowValuesT_out
    var cp_N2_in = parseFloat(rowDataT.N2);
    var cp_N2_out = parseFloat(rowDataT_out.N2); // Use 'O2' column from T_out row data for result3 calculation
    return [percent_N2, volume_N2, kg_flow_N2, cp_N2_in, cp_N2_out, mole_flow_N2];
    
}



export function FO2(O2, FV, rowDataT, rowDataT_out) {
    var M_O2 = 32.0; // Molecular weight of O2
    var percent_O2 = O2;
    var volume_O2 = FV * O2 / 100; // Volume of O2 in Nm3/hr
    var mole_flow_O2 = volume_O2 / 22.4;
    var kg_flow_O2 = volume_O2 / 22.4 * M_O2; // Molar flow of O2
    // Assuming you want to use a value related to T_out from rowValuesT_out
    var cp_O2_in = parseFloat(rowDataT.O2);
    var cp_O2_out = parseFloat(rowDataT_out.O2); // Use 'O2' column from T_out row data for result3 calculation
    return [percent_O2, volume_O2, kg_flow_O2, cp_O2_in, cp_O2_out,mole_flow_O2 ];
    
}

export function FCO2(CO2, FV, rowDataT, rowDataT_out) {
    var M_CO2 = 44.01; // Molecular weight of CO2
    var percent_CO2 = CO2;
    var volume_CO2 = FV * CO2 / 100; // Volume of O2 in Nm3/hr
    var mole_flow_CO2 = volume_CO2 / 22.4;
    var kg_flow_CO2 = volume_CO2 / 22.4 * M_CO2; // Molar flow of O2
    // Assuming you want to use a value related to T_out from rowValuesT_out
    var cp_CO2_in = parseFloat(rowDataT.CO2);
    var cp_CO2_out = parseFloat(rowDataT_out.CO2); // Use 'O2' column from T_out row data for result3 calculation
    return [percent_CO2, volume_CO2, kg_flow_CO2, cp_CO2_in, cp_CO2_out,mole_flow_CO2 ];
    
}

export function FSO2(SO2, FV, rowDataT, rowDataT_out) {
    var M_SO2 =64.06; // Molecular weight of SO2
    var percent_SO2 = SO2 *0.0001;
    var volume_SO2 = FV * percent_SO2 / 100; // Volume of O2 in Nm3/hr
    var mole_flow_SO2 = volume_SO2 / 22.4;
    var kg_flow_SO2 = volume_SO2 / 22.4 * M_SO2; // Molar flow of O2
    // Assuming you want to use a value related to T_out from rowValuesT_out
    var cp_SO2_in = parseFloat(rowDataT.SO2);
    var cp_SO2_out = parseFloat(rowDataT_out.SO2); // Use 'O2' column from T_out row data for result3 calculation
    return [percent_SO2, volume_SO2, kg_flow_SO2, cp_SO2_in, cp_SO2_out, mole_flow_SO2];
    
}

export function FNO2(NO2, FV, rowDataT, rowDataT_out) {
    var M_NO2 =46.0005; // Molecular weight of NO2
    var percent_NO2 = NO2 *0.0001;
    var volume_NO2 = FV * percent_NO2 / 100; // Volume of O2 in Nm3/hr
    var mole_flow_NO2 = volume_NO2 / 22.4;
    var kg_flow_NO2 = volume_NO2 / 22.4 * M_NO2; // Molar flow of O2
    // Assuming you want to use a value related to T_out from rowValuesT_out
    var cp_NO2_in = parseFloat(rowDataT.NO2);
    var cp_NO2_out = parseFloat(rowDataT_out.NO2); // Use 'O2' column from T_out row data for result3 calculation
    return [percent_NO2, volume_NO2, kg_flow_NO2, cp_NO2_in, cp_NO2_out, mole_flow_NO2];
    
}
export function FHCL(HCL, FV, rowDataT, rowDataT_out) {
    var M_HCL =36.5; // Molecular weight of NO2
    var percent_HCL = HCL * 0.0001;
    var volume_HCL = FV * percent_HCL / 100; // Volume of O2 in Nm3/hr
    var mole_flow_HCL = volume_HCL / 22.4;
    var kg_flow_HCL = volume_HCL / 22.4 * M_HCL; // Molar flow of O2
    // Assuming you want to use a value related to T_out from rowValuesT_out
    var cp_HCL_in = parseFloat(rowDataT.HCL);
    var cp_HCL_out = parseFloat(rowDataT_out.HCL); // Use 'O2' column from T_out row data for result3 calculation
    return [percent_HCL, volume_HCL, kg_flow_HCL, cp_HCL_in, cp_HCL_out, mole_flow_HCL];
    
}
export function FH2S(H2S, FV, rowDataT, rowDataT_out) {
    var M_H2S =34.0; // Molecular weight of NO2
    var percent_H2S = H2S * 0.0001;
    var volume_H2S = FV * percent_H2S / 100; // Volume of O2 in Nm3/hr
    var mole_flow_H2S = volume_H2S / 22.4;
    var kg_flow_H2S = volume_H2S / 22.4 * M_H2S; // Molar flow of O2
    // Assuming you want to use a value related to T_out from rowValuesT_out
    var cp_H2S_in = parseFloat(rowDataT.H2S);
    var cp_H2S_out = parseFloat(rowDataT_out.H2S); // Use 'O2' column from T_out row data for result3 calculation
    return [percent_H2S, volume_H2S, kg_flow_H2S, cp_H2S_in, cp_H2S_out, mole_flow_H2S];
    
}
export function FH2O(H2O, FV, rowDataT, rowDataT_out) {
    var M_H2O =18.02; // Molecular weight of NO2
    var percent_H2O = H2O;
    var volume_H2O = FV * H2O / 100; // Volume of O2 in Nm3/hr
    var kg_flow_H2O = volume_H2O / 22.4 * M_H2O; // Molar flow of O2
    // Assuming you want to use a value related to T_out from rowValuesT_out
    var mole_flow_H2O = volume_H2O / 22.4 ; 
    var cp_H2O_in = parseFloat(rowDataT.H2O);
    var cp_H2O_out = parseFloat(rowDataT_out.H2O); // Use 'O2' column from T_out row data for result3 calculation
    return [percent_H2O, volume_H2O, kg_flow_H2O, cp_H2O_in, cp_H2O_out, mole_flow_H2O];
    
}
export function FCO(FV, rowDataT, rowDataT_out) {
    var M_CO =28.0; // Molecular weight of NO2

    var cp_CO_in = parseFloat(rowDataT.CO);
    var cp_CO_out = parseFloat(rowDataT_out.CO); // Use 'O2' column from T_out row data for result3 calculation
    return [M_CO, cp_CO_in, cp_CO_out];
    
}

    export function P_sat_check() {
        let T_out = parseFloat(document.getElementsByName('T_out')[0].value) || 0;
        let FV = parseFloat(document.getElementsByName('FV')[0].value) || 0;
        const a = 8.07131;
        const b = 1730.63;
        const c = 233.426;
        const log10P = a - (b / (c + T_out));        
        let T_expansion = (T_out + 273.15)/273;
        let P_sat = Math.pow(10, log10P) * 0.1333;//kpa
        let mass_P_sat = 18.02 * P_sat * 1000 / (8.3145*(T_out + 273.15)) ; // g/m3
        var selectedValue; // 這裡也用 var 聲明
        var mole_tot_out_check;
        var gas_mass_psat =FV * T_expansion * mass_P_sat /1000;//kg/hr
        var gas_mole_psat = gas_mass_psat /18.02 ;//kmole/hr
        var H2O_coldown;
        var result_H2O_2 = FH2O(H2O, FV, rowValuesT, rowValuesT_out);
        if (percent_P_2 - percent_P < 0) {
            selectedValue = percent_P_2; // 如果 P1 - P2 < 0，選擇 P1
            mole_tot_out_check = results_N2[5] + results_O2[5] + results_CO2[5] + results_SO2[5] + results_NO2[5] + results_HCL[5] + results_H2S[5] + mole_flow_CO + out_water_mole;         
            H2O_coldown = 0;
        
        } else {
           selectedValue = percent_P; // 否則選擇 P2
           mole_tot_out_check = results_N2[5] + results_O2[5] + results_CO2[5] + results_SO2[5] + results_NO2[5] + results_HCL[5] + results_H2S[5] + mole_flow_CO + gas_mole_psat;

           H2O_coldown = makeup_water - (gas_mass_psat - result_H2O_2[2] );
        }
    //document.getElementById('percent_P').value = selectedValue;
    console.log('selectedValue:', selectedValue);
    console.log('mole_tot_out_check:', mole_tot_out_check);
    console.log('H2O_coldown:',H2O_coldown);
    

   return {
        selectedValue: selectedValue.toFixed(4), // 格式化为两位小数
        mole_tot_out_check: mole_tot_out_check.toFixed(4), // 格式化为两位小数
        H2O_coldown: H2O_coldown
    };
    }
