
    export function P_sat_check() {
        const a = 8.07131;
        const b = 1730.63;
        const c = 233.426;
        const log10P = a - (b / (c + T_out)); 
        let FV = parseFloat(document.getElementsByName('FV')[0].value) || 0;
        let T_out = parseFloat(document.getElementsByName('T_out')[0].value) || 0;
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
