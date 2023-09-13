import Menu from "./MenueArray";
import Submenu from "./Submenu";

const Primarmenu=()=>{
    return(
        <>
                 <div className="primary-menu d-lg-none">
                        {/* <ul className='m-0'>
                            <li><a href="ds">Home</a></li>
                            <li><Submenu name={'product'} link={'youtube.com'} /></li>
                            <li ><div className='d-flex justify-content-between border-bottom border-white'><a href="ol">subsides</a>  <span>+</span></div>
                            <ul>
                                <li className="pl-5"><a href="">item 1</a></li>
                                <li className="pl-5"><a href="">item 2</a></li>
                                <li className="pl-5"><a href="">item 3</a></li>
    
                            </ul>
                            </li>
                            <li ><div className='d-flex justify-content-between border-bottom border-white'><a href="ol">products</a> <span>+</span></div>
                            <ul>
                                <li className="pl-5"><a href="">item 1</a></li>
                                <li className="pl-5"><a href="">item 2</a></li>
                                <li className="pl-5"><a href="">item 3</a></li>
    
                            </ul>
                            </li>
                            <li><a href="ol">our services</a></li>
                            <li><a href="ol">Blog</a></li>
                            <li><a href="dfj">contact us</a></li>
                            <li><div className='d-flex justify-content-between border-bottom border-white'><a href="djk">Apply For</a><span>+</span></div>
                            <ul>
                                <li className="pl-5"><a href="">item 1</a></li>
                                <li className="pl-5"><a href="">item 2</a></li>
                                <li className="pl-5"><a href="">item 3</a></li>
    
                            </ul>
                            
                            </li>
                        </ul> */}
                        <ul className="m-0">
                            {
                                Menu.map((arr)=>{
                                    if(Object.keys(arr).length<=2)
                                    {
                                        return(
                                            <li><a href={arr.link}>{arr.name}</a></li>
                                        )
                                    }
                                    else{
                                        return(
                                            <>
                                            <li><Submenu myarr={arr.submenu} name={arr.name} link={arr.link} /></li>
                                            </>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </div>
        </>
    )
}

export default Primarmenu;