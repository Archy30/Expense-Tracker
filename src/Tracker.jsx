import React, { useState } from "react";
import "./styles.css";

let p=0;
export default function Tracker() {
  const[price,setprice]=useState("");
  const[top,settop]=useState([]);
  const[cost,setcost]=useState(0);

  const[title,settitle]=useState('');
  const[titleop,settitleop]=useState([]);
  
  const tevent=(event)=>{
    setprice(event.target.value);  
  }
  const inputevent=(event)=>{
    settitle(event.target.value);
  }
  const sub=()=>{
    p=p+Number(price);
    settop([...top,{id:top.length,value:price}]);
    console.log(top);
    setprice('');
    setcost(p);
    settitleop([...titleop,{id:top.length,value:title}]);
    settitle('');
  }
 
  return (
    <>
      <div className="additem">
        <div className="heading">
          <input type="text" placeholder="enter title" onChange={inputevent} value={title}></input>
          <input type="text" placeholder="enter price" onChange={tevent} value={price}></input>
          <button className="btn" onClick={sub}>+</button>
        </div>
        <div className="details">
            <ul>
              <table cellSpacing="15" cellPadding="10">
                <tr>
                  <th>{titleop.map(displayt=>{
                    return <li key={displayt.id}>{displayt.value}</li>
                    })}</th>
                    <th>{top.map(displayt=>{
                    return <li key={displayt.id}>{displayt.value}</li>
                    })} </th>
                </tr>
              </table>     
            </ul>  
            </div>
                 <h2>Total Expense : Rs {cost}</h2>
      </div> 
    </>
  );
}

