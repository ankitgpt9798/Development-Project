const button=document.getElementById('calbtn');

button.addEventListener('click',()=>{
 const input1=document.getElementById('feet');
 const ft=Number(input1.value);
 const input2=document.getElementById('inches');
 const inch=Number(input2.value);
 const input3=document.getElementById('weight');
 const wt=Number(input3.value);

 if(isNaN(ft)|| isNaN(inch) || isNaN(wt))
    return;

   let totalInches = (ft * 12) + inch;
    let heightMeters = totalInches * 0.0254;
     let bmi =  wt/ (heightMeters * heightMeters);
    bmi = bmi.toFixed(2);

    document.getElementById("output").textContent = "Your BMI: " + bmi;
})

const resetBtn=document.getElementById('resbtn');
resetBtn.addEventListener("click", () => {
    feet.value = "5";
    inches.value = "0";
    weight.value = "";
    resultBox.innerHTML = "";
});