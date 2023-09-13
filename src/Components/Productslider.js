import InfiniteCarousel from 'react-leaf-carousel';
import taleemulquran from './images/taleemalquranlogooo.png';
import kaliwal from './images/kaliwal-fit-copy.png';
import moby from './images/mozbytech-fit-new.png';
import itaacademia from './images/ita-academia-fit-1.webp';
import shopme from './images/shopme-online-fit.png';
import whitepure from './images/writepure-fit-2.png'




const Productslider =()=>{
    return(
        <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
            },
          }
        ]}
        dots={true}
        showSides={true}
        sidesOpacity={0.5}
        sideSize={0.1}
        slidesToScroll={1}
        slidesToShow={4}
        scrollOnDevice={true}
      >
    
        <div>
      
          <img
            alt=""
            src={kaliwal}
          />
        </div>
        <div>
       
          <img
            alt=""
            src={shopme}
          />
        </div>
        <div>
     
          <img
            alt=""
            src={itaacademia}
          />
        </div>
        <div>
     
          <img
            alt=""
            src={moby}
          />
        </div>
        <div>
     
          <img
            alt=""
            src={taleemulquran}
          />
        </div>
        <div>
     
          <img
            alt=""
            src={whitepure}
          />
        </div>
      
    

       
     
    
        
      </InfiniteCarousel>

    )
}
export default Productslider;