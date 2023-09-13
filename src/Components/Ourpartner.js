

import './ourpartner.css';
import img1 from './images/imageone.jpg'
import Productslider from './Productslider';




const Partner =()=>{
    return(
        <>
            <div className="partner py-4">
                <h2 className='pt-5 text-center'>Some Of Our Partners</h2>
                <div className='text-center'>
                    <span className='usersicon'><span className="fa fa-users" ></span></span>
                </div>
                <h5 className='text-center'>Our valuable Partners</h5>

                <div className="showpartner mt-4">
               <Productslider/>

                </div>
            </div>
        </>
    )
}

export default Partner;