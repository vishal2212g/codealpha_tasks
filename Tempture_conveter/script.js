const calculateTemp =()=>{
    const inputTemp = document.getElementById('temp').value;

    const tempSelectd = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelectd.selectedIndex].value;

// celsius to Fahreheit
const celToFah =(cel) =>{
    let fahrenheit =((cel*9/5)+32).toFixed(1);
return fahrenheit;
}

// Fahrenheit to celsius

const fahToCel =(fah)=>{
    let celsius=((fah-32)*5/9).toFixed(1);
    return celsius;
}

if (valueTemp =='cel'){
    document.getElementById('result').innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
}

else{
    document.getElementById('result').innerHTML = fahToCel(inputTemp) + "&#176; Celsius";

}
}


