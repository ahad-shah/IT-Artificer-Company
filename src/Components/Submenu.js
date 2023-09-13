import { useState } from "react";

const Submenu =(props)=>{

    const [disp,setdisp]=useState(false);
    const showfunc=()=>{
        setdisp(!disp);
    }
    return(
        <>
      <div className="d-flex justify-content-between ">
        <a href={props.link}>{props.name}</a><span onClick={showfunc}>{disp?'-':'+'}</span>
      </div>
      {
        disp===true &&      <ul className="border-top border-white">



       {
        props.myarr.map((arr)=>{
          return(
            <li><a className="pl-5" href={arr.link}>{arr.name}</a></li>
          )
        })
       }
      </ul>

      }
 

        </>
    )
}
export default Submenu;

