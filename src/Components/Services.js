

import imgsr from './images/ourservice.jpg';
import Menu from './MenueArray'



const Services =()=>{

    const servicedata=[]
    return(
        <div className="services">
        <img src={imgsr} height={'250px'} width={'100%'} alt="" />

        <h3 className='display-5 mt-2'>IT Solution Services</h3>
        <h2 className='py-2'>Best IT Solution Services Peshawar  </h2>
        
When it comes to judging the specialty of an IT companies, web services and digital marketing services are essential factors. At IT Artificer the best IT solution services peshawar, where our team specialize in providing top-quality solutions for web development and mobile applications, as well as desktop applications. IT Artificer experts also offers a range of additional services, such as software testing, graphic design services, and digital marketing services. Whether you’re looking to create a new website, optimize your existing digital presence, or develop a custom application, we’ve got you covered.

Besides this, the trainees are also entertained through the service of Professional Training.
<ul className='mt-3'>

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


    {
            Menu.map((itm)=>{
                if(itm.name==='our service'){
                    return(
                       
                            itm.submenu.map((sub)=>{
                                return (
                                    <>
                                    <h5>{sub.name}</h5>
                                    <p>We are providing web hosting and domain services at the reasonable and lowest cost as compare to the market at Peshawar, Pakistan. Web hosting is presently about being all over the place and any place where your client needs you.IT Artificer offers all kind of domain registration having different type of extension for your desire business name. For this reason, the coming of the web and afterward the World Wide Web blast is something which has gotten the money for the universality of the web to the principal level, giving organizations the lead by comprehension and giving the requirements that the client is searching for.</p>

                                    </>
                                ) 
                            })
                        
                    )

                }

                return null;
            })
        } 


        </div>
    )
}

export default Services;