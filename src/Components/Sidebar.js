import { RedoOutlined } from '@mui/icons-material'
import Menu from './MenueArray';
import { recentpostarray } from "./Myarraylist";
import glanceved from './images/pexels-kindel-media-6774633 (2160p).mp4';






  import './sidebar.css'


const Sidebar =()=>{
    return(
        <div className="sidebar">
        <div className="mainsearch">
        <div className="searchbox d-flex">
            <input type="text" className="flex-grow-1" />
            <span className="btnsearch">Searrch</span>
        </div>
        </div>
        <div className="row m-0">
            <div className="col-lg-12 col-md-6 p-0 pe-1 pe-lg-0">
            <div className="itsolution">
        <h3 className="sideheading">IT Solution Services</h3>

        <ul className="itservicelist">
        

        {
            Menu.map((itm)=>{
                if(itm.name==='our service'){
                    return(
                       
                            itm.submenu.map((sub)=>{
                                return <li>{sub.name}</li>
                            })
                        
                    )

                }

                return null;
            })
        }

       
        </ul>

      

        
        </div>

            </div>
            <div className="col-lg-12 col-md-6 p-0">
            <div className="sideupdate">
            <h3 className="sideheading">Technology Updates</h3>

            <ul className='updatelist'>
            {
                recentpostarray.map((itm)=>{
                    return <li>{itm.heading}</li>
                })
            }

            </ul>
        </div>

            </div>
        </div>
      

      

        <div className="sideglance">
            <h3 className="sideheading">At a Glance</h3>
            <div className="sidevedio">
            <iframe width="100%" height="280" src="https://www.youtube.com/embed/QyhwSYhX09s?si=zvTHleERMlMn6mv1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          
            </div>
        </div>
    </div>
    )
}

export default Sidebar;