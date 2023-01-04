import React, { useState } from "react";
import Button from "./Button";
import Screen from "./Screen";

function Body() {
  const [exp, setExp] = useState('')
  const [firstVal, setfirstVal] = useState(null)
  const [secondVal, setsecondVal] = useState(null)
  const [operator, setOperator] = useState(null)


  const signs = ['+', '-', '/', '*']
  const getVal=(e)=> {
    setExp(!exp ? e : exp + e)
  }
  

  const allClear = ()=>{
    setExp('')
    setfirstVal(null)
    setsecondVal(null)
  }

  return (
    <>
      <div
        className=" bg-gradient text-dark rounded position-absolute top-50 start-50 translate-middle"
        style={{ backgroundColor: "#f2f2f2", width: "30%", height: "460px" }}
      >
        <Screen expression = {exp}/>
        <div className="row ">
          <div className="col-3">
            <ul className="">
              <Button title="7" onClick={()=>getVal(7)}/>
              <Button title="4" onClick={()=>getVal(4)} />
              <Button title="1" onClick={()=>getVal(1)} />
            </ul>
          </div>
          <div className="col-3">
            <ul className="ul_style">
              <Button title="8" onClick={()=>getVal(8)}/>
              <Button title="5" onClick={()=>getVal(5)}/>
              <Button title="2" onClick={()=>getVal(2)}/>
            </ul>
          </div>
          <div className="col-3">
            <ul className="ul_style">
              <Button title="9" onClick={()=>getVal(9)}/>
              <Button title="6" onClick={()=>getVal(6)}/>
              <Button title="3" onClick={()=>getVal(3)}/>
            </ul>
          </div>
          <div className="col-3">
            <ul className="ul_style">
              <Button title="+" onClick={()=>getVal('+')}/>
              <Button title="-" onClick={()=>getVal('-')}/>
              <Button title="/" onClick={()=>getVal('/')}/>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <ul className="">
              <Button title="0" onClick={()=>getVal(0)}/>
            </ul>
          </div>
          <div className="col-3">
            <ul className="ul_style">
              <Button title="C" onClick={()=>allClear()}/>
            </ul>
          </div>
          <div className="col-3">
            <ul className="">
              <Button title="=" onClick={() => {setExp(eval(exp))}}/>
            </ul>
          </div>
          <div className="col-3">
            <ul className="ul_style">
              <Button title="*" onClick={()=>getVal('*')}/>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
