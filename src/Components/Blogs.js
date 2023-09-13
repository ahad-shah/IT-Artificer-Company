
import {recentpostarray}from './Myarraylist'
import './blog.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPenNib } from '@fortawesome/free-solid-svg-icons'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Person3Icon from '@mui/icons-material/Person3';


const Blog=()=>{
    return(

        <div className='blog'>
        <h2 className='blhead'>blog</h2>

        {
            recentpostarray.map((itm)=>{
                return(
                    <div className="row m-0 mt-3">
            <div className="col-sm-6 p-0">
                <img src={itm.img} height={'250px'} width={'100%'} alt="" />
            </div>
            <div className="col-sm-6 ">
            <div className="blgcontentbox">
                <h5 className='blogheading mt-3 mt-sm-0'>{itm.heading}</h5>
                <p>{itm.content}</p>
                <div className="blogdate d-flex p-0">
                    <p className='mb-0'><CalendarMonthIcon style={{color:'#1bbc9b'}}/>    {itm.date}</p>
                    <p className='ms-3 mb-0'> <Person3Icon style={{color:'#1bbc9b'}}/> Admin</p>
                </div>
            </div>
                
            
                
            </div>
        </div>

                )
            })
        }
 

        </div>
     

    )
}

export default Blog;