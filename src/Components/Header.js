 
import AdbIcon from '@mui/icons-material/Adb';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Close, Facebook, Twitter, YouTube } from '@mui/icons-material';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import MenuIcon from '@mui/icons-material/Menu';
import './header.css';



 
import image1 from './images/italogo.webp'
import Primarmenu from './Primary-menu';
import { useState } from 'react';
import Secodarymenu from './Secondarymenu';


const Header =()=>{
    const[showmenu,setshowmenu]=useState(false);
    const myfunc=()=>{
        setshowmenu(!showmenu)
    }

         return(
            <>
            <div className="top-header  "  >
                <div className="row  justify-content-center m-0">
                    <div className="col-lg-11" >
                        <div className=" d-lg-flex justify-content-between ">
                    
                                <div className="left-tpheader ">
                                    <span><i><LocationOnIcon style={{fontSize:'inherit'}}/></i> Board bazar kpk Pakistan</span>
                                    <span><i><PhoneForwardedIcon style={{fontSize:'inherit'}} /></i>0333 82378923</span>
                                    <span><i><MailOutlineIcon style={{fontSize:'inherit'}} /></i>ita@gmail.com</span>
                                </div>
                                <div className="right-tpheader">
                                    <div className='socialmedia'>
                                        <ul className='d-flex justify-content-center'>
                                            <li><a href="fkdj"><Facebook style={{fontSize:'inherit'}}/></a></li>
                                            <li><a href="dkjf"><Twitter style={{fontSize:'inherit'}}/></a></li>
                                             <li><a href="kj"><YouTube style={{fontSize:'inherit'}}/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
             </div>

                <div className="menuheader py-3" >
                    <div className="row justify-content-center m-0" >
                        <div className="col-lg-11  d-flex justify-content-between align-items-baseline flex-wrap " >
                            <div className='d-flex d-lg-block justify-content-between '>
                                <div className="logo">
                                    <img src={image1}   alt="" />
                                </div>
                           
                            </div>
                            <div className="menu  d-flex justify-content-end " >
                        
                                {/* <ul  className='d-lg-flex d-none m-0   justify-content-around  '>
                                    <li><a href='u'>Home</a> </li>
                                    <li><a href='j'>About us</a>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Our Team</li>
                                        <li className='list-group-item'>Testimonial </li>
                                    </ul>
                        
                                    </li>
                                    <li><a href='uio'>Subsides</a>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Ita kaliwal</li>
                                        <li className='list-group-item'>Ita R-center </li>
                                        <li className='list-group-item'>Ita Academia </li>
                        
                                    </ul>
                                    </li>
                                    <li><a href='nk'>products</a>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Point of Sale</li>
                                        <li className='list-group-item'>School Mis </li>
                                        <li className='list-group-item'>Currency Mis </li>
                                        <li className='list-group-item'>Haj umra Mis </li>
                                        <li className='list-group-item'>R Estate software </li>
                        
                                    </ul>
                        
                                    </li>
                                    <li><a href='lk'>our service</a>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>Domain | Hosting</li>
                                        <li className='list-group-item'>Digital Marketing </li>
                                        <li className='list-group-item'>Web Development</li>
                                        <li className='list-group-item'>Mobile Application</li>
                                        <li className='list-group-item'>Graphic Designing </li>
                                        <li className='list-group-item'>Software Apps</li>
                                        <li className='list-group-item'>E-Comerce</li>
                                        <li className='list-group-item'>Content Writing </li>
                                        <li className='list-group-item'>Fyp Ideas </li>
                        
                                    </ul>
                                    </li>
                                    <li><a href='k'>blog</a></li>
                                    <li><a href='d'>contact us</a></li>
                                    <li><a href='d'>apply for</a>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>For Training</li>
                                        <li className='list-group-item'>Apply for Job </li>
                                        <li className='list-group-item'>For Internship</li>
                        
                                    </ul>
                                    </li>
                                </ul> */}
                                <ul className='d-lg-flex d-none m-0   justify-content-around'>
                                <Secodarymenu/>
                                </ul>
                                <span className='menubar d-lg-none '>
                                    <span onClick={myfunc}>
                                    {
                                        showmenu===false?<MenuIcon  />: <Close/>
                                    }
                                        
                                       
                                    </span>
                                </span>
                                
                            </div>

                        </div>
                    </div>
                    {
                        (showmenu && <Primarmenu/>)
                        
                    }
               
                </div>
            
              

            </>
        
         )

 }

 export default Header;