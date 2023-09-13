import img1 from "./images/imageone.jpg";
import {recentpostarray,dummayarray}  from "./Myarraylist";
import "./Recentnews.css";



const Recent = () => {
  
  const remainarray = dummayarray;
  console.log(remainarray);

  return (
    <>
      {/* <div className="recentpost">
            <div className="contan">
                <div className="row justify-content-center m-0 h-100">
                    <div className="col-11">
                    <div className="row m-0 h-100">
                        <div className="col-md-4 mt-3 Newscard-large">
                           
                            <img src={imgpointofsale} width={'100%'} height={'100%'} alt="" />
                           <div className='Newstext'>
                            <h3 className='newsheading'>geo news headlines chat gpt create new version</h3>
                            <p className='Newsdate'>20/03/20023</p>
                           </div>
                           
                        </div>
                        <div className="col-md-8 p-0 ps-md-3">
                        <div className="row h-100   ">
                            <div className="col-sm-6 mt-3">
                            <div className="Newscard-small" >
                            <img src={imgpointofsale} width={'100%'} height={'100%'} alt="" />
                           <div className='Newstext'>
                            <h3 className='newsheading'>Ary news headlines chat gpt create new version</h3>
                            <p className='Newsdate'>20/03/20023</p>
                           </div>
                           </div>
                
                            </div>
                            <div className="col-sm-6 mt-3">
                            <div className="Newscard-small">
                            <img src={imgpointofsale} width={'100%'} height={'100%'} alt="" />
                           <div className='Newstext'>
                            <h3 className='newsheading'>geo news headlines chat gpt create new version</h3>
                            <p className='Newsdate'>20/03/20023</p>
                           </div>
                           </div>
                            </div>
                            <div className="col-sm-6 mt-3">
                            <div className="Newscard-small">
                            <img src={img1} width={'100%'} height={'100%'} alt="" />
                           <div className='Newstext'>
                            <h3 className='newsheading'>geo news headlines chat gpt create new version</h3>
                            <p className='Newsdate'>20/03/20023</p>
                           </div>
                           </div>
                            </div>
                            <div className="col-sm-6 mt-3">
                            <div className="Newscard-small">
                            <img src={img1} width={'100%'} height={'100%'} alt="" />
                           <div className='Newstext'>
                            <h3 className='newsheading'>geo news headlines chat gpt create new version</h3>
                            <p className='Newsdate'>20/03/20023</p>
                           </div>
                           </div>
                            </div>
                        </div>
                        </div>
                    </div>


                    </div>
                </div>

            
            </div>
            </div> */}
      <div className="recentpost">

        <div className="contan">
        <h3 className="reheading text-center">Recent Posts</h3>
      <p className="recontent text-center">Latest News Update Around The World From Technology.</p>     
          <div className="row justify-content-center m-0 ">
            <div
              className="col-11 "
              
            >
              <div className="row m-0 ">
                <div className="col-md-4 mt-3 Newscard-large">
                  <img
                    src={recentpostarray[0].img}
                    width={"100%"}
                    height={"100%"}
                    alt=""
                  />
                  <div className="Newstext">
                    <h3 className="newsheading">{recentpostarray[0].heading}</h3>
                    <p className="Newsdate">{recentpostarray[0].date}</p>
                  </div>
                </div>

                <div
                  className="col-md-8 p-0 ps-md-3"
                
                >
                  <div className="row">
                 
                    { recentpostarray.map((itm,indx) => {

                      if(indx===0){
                        return null
                      }
                      
                      return (
                        <>
                      
                       
                          <div className="col-sm-6 mt-3">
                         
                            <div className="Newscard-small" >
                              <img
                                src={itm.img}
                                width={"100%"}
                                height={"100%"}
                                alt=""
                              />
                              <div className="Newstext">
                                <h3 className="newsheading">{itm.heading}</h3>
                                <p className="Newsdate">{itm.date}</p>
                              </div>
                            </div>
                          </div>
                          
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recent;
