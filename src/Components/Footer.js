
import Menu from './MenueArray';
const Footer =()=>{
    return(
        <>
        <div className="foot " style={{backgroundColor:'black',padding:'40px'}}>
        <div className="row m-0 justify-content-center " >
            <div className="col-lg-3 col-md-6 mt-2 ">
                <h3>More About ITA</h3>
                <p>IT Artificer Serving its Services all over the world specially in Pakistan, America, England, Afghanistan, UAE and India. We employ a skilled team of developers who are totally focused on delivering high quality software solutions which enable our customers to achieve their critical IT objectives.</p>
                <div className="f-socialmedia">
                <a href="https:facebook.com">
                <span className="fa-brands  fa-facebook-f " ></span>                

                </a>
                <a href="https://twitter.com">   <span className="fa-brands fa-twitter "></span> </a>
                <a href="https://youtube"> <span className="fa-brands fa-youtube " ></span></a>
          
         
           

            </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-2 d-flex justify-content-center">
                <div className=''>
                    <h3>Menu</h3>
                    {/* <ul><li><a href="s">Blog</a></li>
                    <li><a href="sd">About Us</a></li>
                    <li><a href="kl">Subsides</a></li>
                    <li><a href="sl">Products</a></li>
                    <li><a href="lk">Privacy Policy</a></li>
                    <li><a href="a">Point of Sale</a></li>
                    <li><a href="sl">Apply for Job</a></li></ul> */}
                    <ul className='ps-0 ms-0'>
                        {
                    
                         Menu.map((arr,indx)=>{
                            if(indx===0){
                                return null;
                            }
                            else{
                                return(
                                      <li>{arr.name}</li>
                    
                                )
                            }
                         })
                        }
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-2  d-flex justify-content-center">
            <div>
                <h3>Services</h3>
                    {/* <ul><li><a href="a">Domain</a></li>
                    <li><a href="la">Web Development</a></li>
                    <li><a href="a">Graphic Designing</a></li>
                    <li><a href="lk">Digital Marketing</a></li>
                    <li><a href="l">Hajj Umra Mis</a></li>
                    <li><a href="al">ITA Academia</a></li>
                    <li><a href="lk">E-Buisness</a></li></ul> */}
                    <ul className='ps-0 ms-0'>
                    {
                        Menu.map((arr)=>{
                            if(arr.name==='our service'){
                                return(
                                    <>
                                        {
                                            arr.submenu.map((sub)=>{
                                                return(
                                                    <li>{sub.name}</li>
                                                )
                                            })
                                        }
                                    </>
                                )
                            }
                            else{
                                return null;
                            }
                        })
                    }
                
                
                    </ul>
            </div>
               
            </div>
            <div className="col-lg-3 col-md-6 mt-2">
                <h3>Map</h3>
                <div className="mymap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7794581664243!2d71.46622297464481!3d33.99819812058397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d910d1ab0771df%3A0x154dda28d0c3877!2sPTCL%20Training%20center!5e0!3m2!1sen!2s!4v1692176059769!5m2!1sen!2s" style={{borderRadius:'10px'}} height={'250px'} width={'100%'} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    

        </div>
        <div className="bottomfoot">
        <div className=" d-md-flex justify-content-between">
            <h6 className='text-center'>Copyright © IT Artificer. All rights reserved</h6>
            <h6 className='text-center'>Buisness Point by pro Design</h6>
        </div>
        
        </div>
        
        
        
        
        
        
        
        </>
    )
}
export default Footer;