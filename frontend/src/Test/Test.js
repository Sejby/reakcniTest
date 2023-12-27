import React, { useState } from "react";
import './Test.css'

function Test() {
  let [startTime, setStartTime] = useState(0)
  let [endTime, setEndTime] = useState()
  const [reakcniCas, setReakcniCas] = useState()

  useEffect(() => {
    setStartTime(setInterval(() => {
      startTime++
    }, 1000))
    console.log(startTime)

  }, [startTime])

  const vypoctiReakcniCas = (e) => {

  }

  return (
    <div id="test" onClick={vypoctiReakcniCas}>
      <h3>Stiskněte tlačítko levé myši pro START</h3>
      <h3>Jakmile uvidíte zelenou barvu, stiskněte znovu levé tlačítko myši v zeleném poli</h3>
    </div>
  );
}

export default Test;
