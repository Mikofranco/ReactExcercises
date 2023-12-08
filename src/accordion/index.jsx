import { useState,useEffect } from "react";
import "./style.css";
export const AccordionExcercise = () => {
  const [dis, setDis] = useState("none");
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const fetchInfo =()=>{
    fetch(url).then(response=>response.json()).then(result=>setData(result))
  }
  useEffect(()=>{
    var s=fetchInfo()
    console.log(s)
  },[])
  const openText = () => {};
  return (
    <div className="accordionExcercise">
      <div className="rectangle">
        one
      </div>
      <div className="boxes">
        <div className="box-one">1</div>
        <div className="box-two">2</div>
        <div className="box-three">3</div>
      </div>
        {/* <li></li>
      <div className="container">
        
        <button className="btn" onClick={openText} id="#1">
          #1
        </button>
        <p className="message" id="#1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          itaque, enim facilis sit neque eaque, tempora aliquam nobis nulla
          assumenda magnam aliquid omnis sed soluta error earum veritatis
          maiores odit?
          
        </p>
        <button className="btn">#2</button>
        <p className="message">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          itaque, enim facilis sit neque eaque, tempora aliquam nobis nulla
          assumenda magnam aliquid omnis sed soluta error earum veritatis
          maiores odit?
        </p>
        <button className="btn">#3</button>
        <p className="message">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          itaque, enim facilis sit neque eaque, tempora aliquam nobis nulla
          assumenda magnam aliquid omnis sed soluta error earum veritatis
          maiores odit?
        </p>
      </div> */}
    </div>
  );
};
