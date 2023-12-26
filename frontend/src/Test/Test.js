import React, { useState } from "react";
import './Test.css'

function Test() {
  const [startTime, setStartTime] = useState()
  const [endTime, setEndTime] = useState()
  const [reakcniCas, setReakcniCas] = useState()

    function vypoctiReakcniCas(e){
      e.preventDefault()
      console.log("KLik");
      
      if (startTime === undefined) {
        setStartTime(new Date())
      }
      else if (startTime !== undefined && endTime === undefined) {
        setEndTime(new Date())
      }
      else if (startTime !== undefined && endTime !== undefined) {
        setReakcniCas(endTime - startTime)
        setStartTime(undefined)
        setEndTime(undefined)
        console.log(reakcniCas)
      }
      
    }

  return (
    <div id="test" onClick={vypoctiReakcniCas}>
      <h3>Stiskněte tlačítko levé myši pro START</h3>
      <h3>Jakmile uvidíte zelenou barvu, stiskněte znovu levé tlačítko myši v zeleném poli</h3>
    </div>
  );
}

export default Test;
