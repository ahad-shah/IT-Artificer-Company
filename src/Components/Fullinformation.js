import About from "./About";


import Menu from "./MenueArray";
import Services from "./Services";
import Sidebar from "./Sidebar";
import Subside from "./Subsides";
import Applyfor from "./Applyfor";
import { Outlet, Route, Routes } from "react-router-dom";







const Fullinform =()=>{
    return(
        <div className="fullinform">
        <div className="row m-0 justify-content-center">
            <div className="col-md-11 col-12  ps-0 pe-0">
            <div className="row m-0">
                <div className="col-lg-8 ">
                <div style={{padding:'15px',border:'1px solid lightgrey'}}>

                
                <Outlet/>
          
          

                </div>
                
                </div>
                <div className="col-lg-4">
                   <Sidebar/>
                   
                  
                </div>
            </div>
            
            </div>
        </div>


        </div>
    )
}

export default Fullinform;