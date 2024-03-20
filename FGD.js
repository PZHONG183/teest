export function FUNCTION_FGD(){


const data = [
  ['25', '20'],
  ['45', '40'],
];

const tableData = {
  100: {'N2': 0.311, 'O2': 0.315, 'CO2': 0.409, 'H2O': 0.36, 'CO': 0.312, 'SO2': 0.435, 'NO2': 0.319, 'HCL': 0.311, 'H2S': 0.373},
    200: {'N2': 0.312, 'O2': 0.32, 'CO2': 0.429, 'H2O': 0.364, 'CO': 0.313, 'SO2': 0.454, 'NO2': 0.321, 'HCL': 0.311, 'H2S': 0.381},
    300: {'N2': 0.313, 'O2': 0.325, 'CO2': 0.447, 'H2O': 0.369, 'CO': 0.316, 'SO2': 0.47, 'NO2': 0.323, 'HCL': 0.313, 'H2S': 0.389},
    400: {'N2': 0.316, 'O2': 0.33, 'CO2': 0.463, 'H2O': 0.374, 'CO': 0.319, 'SO2': 0.483, 'NO2': 0.327, 'HCL': 0.315, 'H2S': 0.398},
    500: {'N2': 0.319, 'O2': 0.334, 'CO2': 0.477, 'H2O': 0.38, 'CO': 0.322, 'SO2': 0.495, 'NO2': 0.33, 'HCL': 0.317, 'H2S': 0.407},
    600: {'N2': 0.321, 'O2': 0.339, 'CO2': 0.49, 'H2O': 0.386, 'CO': 0.326, 'SO2': 0.506, 'NO2': 0.334, 'HCL': 0.32, 'H2S': 0.417},
    700: {'N2': 0.325, 'O2': 0.343, 'CO2': 0.501, 'H2O': 0.392, 'CO': 0.329, 'SO2': 0.515, 'NO2': 0.337, 'HCL': 0.322, 'H2S': 0.426},
    800: {'N2': 0.329, 'O2': 0.347, 'CO2': 0.512, 'H2O': 0.399, 'CO': 0.332, 'SO2': 0.523, 'NO2': 0.34, 'HCL': 0.324, 'H2S': 0.434}
};

function findClosestRowValue(temp) {
  const rows = [100, 200, 300, 400, 500, 600, 700, 800];
  return rows.reduce((prev, curr) => (Math.abs(curr - temp) < Math.abs(prev - temp) ? curr : prev));
}

function findRowValues(row, table) {
  return table[row] || null;
}


function FN2(N2, FV, rowDataT, rowDataT_out) {
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



function FO2(O2, FV, rowDataT, rowDataT_out) {
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

function FCO2(CO2, FV, rowDataT, rowDataT_out) {
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

function FSO2(SO2, FV, rowDataT, rowDataT_out) {
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

function FNO2(NO2, FV, rowDataT, rowDataT_out) {
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
function FHCL(HCL, FV, rowDataT, rowDataT_out) {
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
function FH2S(H2S, FV, rowDataT, rowDataT_out) {
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
function FH2O(H2O, FV, rowDataT, rowDataT_out) {
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
function FCO(FV, rowDataT, rowDataT_out) {
    var M_CO =28.0; // Molecular weight of NO2

    var cp_CO_in = parseFloat(rowDataT.CO);
    var cp_CO_out = parseFloat(rowDataT_out.CO); // Use 'O2' column from T_out row data for result3 calculation
    return [M_CO, cp_CO_in, cp_CO_out];
    
}

document.getElementById('gasForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting



  
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

  let rowValuesT = findRowValues(closestT, tableData);
  let rowValuesT_out = findRowValues(closestT_out, tableData);

  console.log('Row data for T:', rowValuesT);
  console.log('Row data for T_out:', rowValuesT_out);
  
  if (rowValuesT && rowValuesT_out) {
    var results_N2 = FN2(N2, FV, rowValuesT, rowValuesT_out);
    var results_O2 = FO2(O2, FV, rowValuesT, rowValuesT_out);
    var results_CO2 = FCO2(CO2, FV, rowValuesT, rowValuesT_out);
    var results_SO2 = FSO2(SO2, FV, rowValuesT, rowValuesT_out);
    var results_NO2 = FNO2(NO2, FV, rowValuesT, rowValuesT_out);
    var results_HCL = FHCL(HCL, FV, rowValuesT, rowValuesT_out);
    var results_H2S = FH2S(H2S, FV, rowValuesT, rowValuesT_out);
    var results_H2O = FH2O(H2O, FV, rowValuesT, rowValuesT_out);
    var results_CO = FCO(FV, rowValuesT, rowValuesT_out);
   
    const a = 8.07131;
    const b = 1730.63;
    const c = 233.426;
    const log10P = a - (b / (c + T_out));
    const P_sat = Math.pow(10, log10P) * 0.1333;//kpa
    const mass_P_sat = 18.02 * P_sat * 1000 / (8.3145*(T_out + 273.15)) ; // g/m3
    var percent_P = P_sat * 100 / P ;
    
    var T_expansion = (T_out + 273.15)/273;
    var kg_flow = results_O2[2]; // Molar flow result
    var co_flow = 100 - (results_O2[0] + results_N2[0] + results_CO2[0] + results_SO2[0] + results_NO2[0] + results_HCL[0] + results_H2S[0] + results_H2O[0] );
    var volume_CO = FV * co_flow /100 ;
    var mole_flow_CO = volume_CO /22.4 ;
    var CP_in = (results_N2[0]*results_N2[3] + results_O2[0]*results_O2[3] + results_CO2[0]*results_CO2[3] + results_SO2[0]*results_SO2[3] + results_NO2[0]*results_NO2[3] + results_HCL[0]*results_HCL[3] + results_H2S[0]*results_H2S[3] + co_flow*results_CO[1] + results_H2O[0]*results_H2O[3])/100;
    var H_tot_in = FV * CP_in * T;    
    //var H_tot_in = T * (volume_CO * results_CO[1] + results_O2[1] * results_O2[3] + results_N2[1] * results_N2[3] + results_CO2[1] * results_CO2[3] + results_SO2[1] * results_SO2[3] + results_NO2[1] * results_NO2[3] + results_HCL[1]*results_HCL[3] + results_H2S[1] * results_H2S[3] + results_H2O[1] * results_H2O[3]);
    var H_tot_drop = T_out * (volume_CO * results_CO[2] + results_O2[1] * results_O2[4] + results_N2[1] * results_N2[4] + results_CO2[1] * results_CO2[4] + results_SO2[1] * results_SO2[4] + results_NO2[1] * results_NO2[4] + results_HCL[1]*results_HCL[4] + results_H2S[1] * results_H2S[4] + results_H2O[1] * results_H2O[4]);
    var delta_H = H_tot_in - H_tot_drop;
    
    var makeup_water = delta_H / 560; //kg/hr (560kcal/kg)
    var makeup_water_mole = makeup_water/18.02;
    var out_water_mole = makeup_water_mole + results_H2O[5];
    
    var mole_tot_in = results_N2[5] + results_O2[5] + results_CO2[5] + results_SO2[5] + results_NO2[5] + results_HCL[5] + results_H2S[5] + mole_flow_CO + results_H2O[5];
    var mole_tot_out = results_N2[5] + results_O2[5] + results_CO2[5] + results_SO2[5] + results_NO2[5] + results_HCL[5] + results_H2S[5] + mole_flow_CO + out_water_mole;
    var percent_P_2 = 100*out_water_mole / mole_tot_out ; 

    P_sat_check();
    function P_sat_check() {
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
    var result_P = P_sat_check();
    var result_P_sat = P_sat_check().selectedValue;
    var result_mole_P = P_sat_check().mole_tot_out_check;
    var result_colddown = P_sat_check().H2O_coldown;

    
    var SO2_outlet = DE_SOX * results_SO2[5]/100;
    var NO2_outlet = DE_NOX * results_NO2[5]/100;
    var HCL_outlet = DE_HCL * results_HCL[5]/100;
    var H2S_outlet = DE_H2S * results_H2S[5]/100;
 
    
    
    var N2_out = 100 * results_N2[5]/result_mole_P ;
    var O2_out = 100 * results_O2[5]/result_mole_P ;
    var CO2_out = 100 * results_CO2[5]/result_mole_P ;
    var CO_out = 100 * mole_flow_CO /result_mole_P ;
    var SO2_out = 100 * (results_SO2[5] -SO2_outlet )/result_mole_P ;
    var NO2_out = 100 * (results_NO2[5]- NO2_outlet )/result_mole_P ;
    var HCL_out = 100 * (results_HCL[5] - HCL_outlet )/result_mole_P ;
    var H2S_out = 100 * (results_H2S[5] - H2S_outlet) /result_mole_P ;
    var CP_out = (N2_out*results_N2[4] +  O2_out*results_O2[4] + CO2_out*results_CO2[4] + SO2_out*results_SO2[4] + NO2_out*results_NO2[4] + HCL_out*results_HCL[4] + H2S_out*results_H2S[4] + CO_out*results_CO[2] + result_P_sat*results_H2O[4])/100;
    var gas_flow_out = result_mole_P *22.4 ;//Nm3/hr
    var H_tot_out =  gas_flow_out * CP_out * T_out ;
    var delta_H_2 = H_tot_out - H_tot_in;
   
    var demister_mass = demister_number * demister_time * demister;
   

    
    const dropdown = document.getElementById('dropdown');



    
    dropdown.addEventListener("change", function() {
    var selectedValue = dropdown.value;
    someFunctionThatUsesSelectedValue(selectedValue); // 将选中的值作为参数传递
    });
      function someFunctionThatUsesSelectedValue(value) {
    // 从 data 数组中查找与选中值对应的数值
      for (var i = 0; i < data.length; i++) {
        if (data[i][0] === value) {
     
          var result = parseInt(data[i][0], 10) ;
       break;
        }
      }
    }
    var drop_down_value = dropdown.value;
    //var DDD;//test
    var NaOH_mole;
    var NaOH_mass;
    var Na2SO3_mass;
    var MgSO3_mass;
    var MgO_mole;
    var MgO_mass;
    var Water_mass ;
    var mass_water_pro;
     
      //SO2+2NOH = NA2SO3 + H2O
    if (drop_down_value === "45" && SO2_outlet !== 0) {
      //DDD = 3 * parseInt(drop_down_value, 10); // 确保转换成数字再进行计算
      NaOH_mole = SO2_outlet* 2;
      Na2SO3_mass = SO2_outlet *126.043;//kg/hr
      NaOH_mass =  NaOH_mole*39.997;//kg/hr
      Water_mass =  NaOH_mass/0.45;
      mass_water_pro = SO2_outlet *18.02;
      MgO_mole = 0;
      MgO_mass =0;
      MgSO3_mass =0;
      
      //Mg(OH)2 + SO2 = MgSO3 +H2O
    } else if (drop_down_value === "25" && SO2_outlet !== 0) {
      //DDD = 2 * parseInt(drop_down_value, 10); // 同上
      NaOH_mole = 0;
      NaOH_mass = 0;//kg/hr
      Na2SO3_mass = 0;
      MgO_mole = SO2_outlet ;
      MgO_mass = MgO_mole * 58.3197;
      MgSO3_mass = SO2_outlet * 104.3682 ;
      Water_mass = MgO_mass /0.25;   
      mass_water_pro = SO2_outlet *18.02;
    }else if (SO2_outlet === 0) {
    // 当 SO2_outlet 等于 0 时执行的代码
      NaOH_mole = 0;
      NaOH_mass = 0;//kg/hr
      Na2SO3_mass = 0;
      MgO_mole = 0 ;
      MgO_mass = 0;
      MgSO3_mass = 0 ;
      Water_mass = 0;   
      mass_water_pro = 0;
    }
    
    var NaOH_mole_HCL;
    var NaOH_HCL_mass;
    var NaCL_mass;
    //var Water_HCL_mass ;
    var HCL_pro_water;
    var MgOH_mole_HCL;
    var MgOH_HCL_mass;
    var MgCL2_mass;
    
      //HCL+NaOH = NaCL + H2O
    if (drop_down_value === "45" && HCL_outlet !== 0) {  
      NaOH_mole_HCL = HCL_outlet;
      NaOH_HCL_mass = NaOH_mole_HCL *39.997;//kg/hr
      NaCL_mass = HCL_outlet * 58.44 ;//kg/hr
      HCL_pro_water = HCL_outlet * 18.02; //kg/hr
      MgOH_mole_HCL = 0;
      MgOH_HCL_mass = 0;//kg/hr
      MgCL2_mass = 0;      
      
      //Water_HCL_mass = NaOH_HCL_mass/0.45;
      
      //2HCL +Mg(OH)2 = MgCl2 + 2H2O    
     } else if (drop_down_value === "25" && HCL_outlet !== 0) {    
     MgOH_mole_HCL = HCL_outlet / 2;
     MgOH_HCL_mass = MgOH_mole_HCL * 58.3197;//kg/hr
     MgCL2_mass = HCL_outlet * 95.211 / 2;
     HCL_pro_water = HCL_outlet * 18.02 ;//kg/hr
     NaOH_mole_HCL = 0;
     NaOH_HCL_mass = 0;//kg/hr
     NaCL_mass = 0 ;//kg/hr       
       
     }else if (HCL_outlet === 0) {    
     MgOH_mole_HCL = 0;
     MgOH_HCL_mass = 0;//kg/hr
     MgCL2_mass = 0;
     HCL_pro_water = 0;//kg/hr
     NaOH_mole_HCL = 0;
     NaOH_HCL_mass = 0;//kg/hr
     NaCL_mass = 0 ;//kg/hr       
    
     }
    var NaOH_mole_H2S;
    var NaOH_H2S_mass;
    var Na2S_mass;
    //var Water_H2S_mass ;
    var H2S_pro_water;
    var MgOH_mole_H2S;
    var MgOH_H2S_mass;
    var MgS_mass;
       
    //H2S + 2NaOH =2H2O +Na2S
    if (drop_down_value === "45" && H2S_outlet !== 0) {  

    NaOH_mole_H2S = H2S_outlet * 2;
    NaOH_H2S_mass = NaOH_mole_H2S * 39.997;
    Na2S_mass = H2S_outlet * 78.05;
    H2S_pro_water = 2*H2S_outlet * 18.02 ;
    MgOH_mole_H2S = 0;
    MgOH_H2S_mass = 0;
    MgS_mass = 0;
    
    //H2S + Mg(OH)2 = 2H2O +MgS    
    } else if (drop_down_value === "25" && H2S_outlet !== 0) {    

    NaOH_mole_H2S = 0;
    NaOH_H2S_mass = 0;
    Na2S_mass = 0;
    H2S_pro_water = 2*H2S_outlet * 18.02 ;
    MgOH_mole_H2S = H2S_outlet;
    MgOH_H2S_mass = MgOH_mole_H2S * 58.3197;
    MgS_mass = H2S_outlet * 56.38;    
      
    }else if (H2S_outlet === 0) { 
    
    NaOH_mole_H2S = 0;
    NaOH_H2S_mass = 0;
    Na2S_mass = 0;
    H2S_pro_water = 0 ;
    MgOH_mole_H2S = 0;
    MgOH_H2S_mass = 0;
    MgS_mass = 0;     
      
    }
    var tot_NaOH_mass = NaOH_mass + NaOH_HCL_mass + NaOH_H2S_mass;
    var tot_MOH_mass = MgO_mass + MgOH_HCL_mass + MgOH_H2S_mass;
    var tot_NaOH_water_mass = (NaOH_mass + NaOH_HCL_mass + NaOH_H2S_mass)/0.45 ;
    var tot_MOH_water_mass = (MgO_mass + MgOH_HCL_mass + MgOH_H2S_mass) /0.25;
    var tot_naoh_mgo_water_mass =tot_NaOH_water_mass + tot_MOH_water_mass;
    var tot_soild_mass = Na2SO3_mass + MgSO3_mass + NaCL_mass + MgCL2_mass + Na2S_mass + MgS_mass ;
    var tot_pro_water = mass_water_pro + HCL_pro_water + H2S_pro_water;
    var water_outflow = result_colddown +  tot_pro_water + demister_mass + tot_NaOH_water_mass + tot_MOH_water_mass + tot_soild_mass ;  
    var H_drug = Water_mass * 1 * drug_T;
    var H_demister = demister_mass *1 *demister_T;
    var H_colddown = result_colddown * 1 * T_out  ;
    var H_mass_water_pro =  tot_pro_water *1 *T_out;
    var H_outflow = H_demister + H_drug + H_colddown + H_mass_water_pro  ;
    var T_outflow = H_outflow / (result_colddown +  mass_water_pro + demister_mass + Water_mass);
    
    var C_Na2SO3 = Na2SO3_mass *1000 / water_outflow ; // mg/L
    var C_MgSO3 = MgSO3_mass *1000 / water_outflow ; // mg/L
    var C_NaCL = NaCL_mass *1000 / water_outflow ; // mg/L
    var C_MgCL2 = MgCL2_mass *1000 / water_outflow ; // mg/LNa2S_mass
    var C_Na2S = Na2S_mass *1000 / water_outflow ; // mg/L
    var C_MgS = MgS_mass *1000 / water_outflow ; // mg/L
    

    
    var BBB = results_CO[1];
    var AAA = results_CO[2];
    var CCC = FV *(results_SO2[5]/result_mole_P) ;
    // 根据选中的值进行操作的函数


  }
});
  )
