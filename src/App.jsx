import React, { useState } from "react";
import"./App.css";
function App(){
  const[weight,setWeight]=useState("");
  const[height,setHeight]=useState("");
  const[bmi,setBmi]=useState(null);
  const calculateBMI=()=>{
    if(weight&&height){
      const heightInMeter=height/100;
      const bmiValue=(weight/(heightInMeter**2)).toFixed(2);
      setBmi(bmiValue);
    };
  };
  return(
    <div className="App"> 
      <h1>BMI CALCULATER</h1>
      <input
      type="number"
      placeholder="Weight(kg)"
      value={weight}
      onchange={e=>setWeight(e.target.value)} 
      />
      <input
      type="number"
      placeholder="Height(cm)"
      value={height}
      onchange={e=>setHeight(e.target.value)}
 
      />
      <button onClick={calculateBMI}>BMIcalculater</button>
      {bmi && <p>this is bmi:{bmi}</p>}
    </div>
  );
};
export default App;