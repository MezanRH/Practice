import { useState,useRef, useEffect } from 'react'
import data from "./Devison/data"

function App() {

  let [month,setMonth] = useState(new Array(13));
  let [year,setYear] = useState(new Array(2023));
  let [day,setDay] = useState(new Array(32));

  let [monthData,setMonthdata] = useState([])
  let [yearData,setYeardata] = useState([])
  let [dayData,setDaydata] = useState([])
  let [yearDataJs,setYeardatajs] = useState(data)

  useEffect(()=>{
    let arr = []
    for(let i=1;i<month.length;i++){
      arr.push(i)
    }
    setMonthdata(arr)
  },[]);


  useEffect(()=>{
    let arr = []
    for(let i=1870;i<year.length;i++){
      arr.push(i)
    }
    setYeardata(arr)
  },[])

  useEffect(()=>{
    let arr = []
    for(let i = 1; i<day.length; i++){
      arr.push(i)
    }
    setDaydata(arr)
  },[])

  let handleInput = (e)=>{
    if(e.target.value > 1971){
      
    }
  }


  return (
    <>

  
    
    <select onInput={handleInput}>
      <option>Year</option>
      {yearData.map(item =>(
        <option>{item}</option>
      ))}
    </select>
    
    
    <select>
      <option value="">Month</option>
      {monthData.map(item =>(
        <option>{item == 1 && "January" || item == 2 && "February" || item == 3 && "March" || item == 4 && "Aprill" || item == 5 && "May" || item == 6 && "June" || item == 7 && "July" || item == 8 && "August" || item == 9 && "September" || item == 10 && "Octobar" || item == 11 && "November" || item == 12 && "December"}</option>
      ))}
    </select>

    <select>
      <option>Day</option>
      {dayData.map(item=>(
        <option>{item}</option>
      ))}
    </select>


    </>
  )
}

export default App
