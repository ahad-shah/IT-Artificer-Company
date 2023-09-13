
import InfiniteCarousel from 'react-leaf-carousel';
import taleemulquran from './images/taleemalquranlogooo.png';
import kaliwal from './images/kaliwal-fit-copy.png';
import moby from './images/mozbytech-fit-new.png';
import itaacademia from './images/ita-academia-fit-1.webp';
import shopme from './images/shopme-online-fit.png';
// import whitepure from './images/writepure-fit-2.png'
import './ourclient.css';
import imghaider from './images/Haider_Ali_CEO.jpg';
import imgads from './images/IMG_20230823_122553.jpg';
import imgkaseer from './images/kaseershe.jpg';
import imgme from './images/20161204_095043-1.jpg';
import imgcol from './images/tropycombine.jpg';





const Ourclient =()=>{

 const clintdata=[
    {name:'Haider Ali',
     img:imghaider,
    desig:'CEO of It Artificer and wordpress dev',
    content:'We have been delighted with the IT Artificer team. They have been a competent, knowledgeable and professional group of experts who have been able to show patience with our specific needs.'
  },
   
    {
        name:'Mian Ahad Shah',
        img:imgads,
        desig:'Front End Developer',
        content:'We have been delighted with the IT Artificer team. They have been a competent, knowledgeable and professional group of experts who have been able to show patience with our specific needs.'
    },
    {
        name:'Muhammad kaseer',
        img:imgkaseer,
        desig:'Computer Operator in Judiciary',
        content:'We have been delighted with the IT Artificer team. They have been a competent, knowledgeable and professional group of experts who have been able to show patience with our specific needs.'
    },
    {
        name:'Waqas Khan',
        img:imgcol,
        desig:'Primary School Teacher',
        content:'We have been delighted with the IT Artificer team. They have been a competent, knowledgeable and professional group of experts who have been able to show patience with our specific needs.'
        


    }

 ]

    return(
        <div className="ourclient">
            <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
            dots={true}
            showSides={true}
            sidesOpacity={0.5}
            sideSize={0.1}
            slidesToScroll={1}
            slidesToShow={4}
            scrollOnDevice={true}
                  >
                  {
                    clintdata.map((itm)=>{
                        return(
                            <>
                            <div className='clientbox'>
                            <p className='cleintconent'>{itm.content}</p>
                            <div className="d-flex justify-content-center">
                              <div >
                                <div className='d-flex justify-content-center'><img src={itm.img}  alt="" /></div>
                                <h3 className='clientname text-center'>{itm.name}</h3>
                                <p className='clientdesig text-center'>{itm.desig}</p>
                              </div>
                            </div>

         
                            </div>
                            </>
                        )
                    })
                  }
           
        
      
         
        
            
                  </InfiniteCarousel>
        </div>

    )
}
export default Ourclient;