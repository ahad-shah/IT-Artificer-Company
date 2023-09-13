import Menu from './MenueArray';


const Secodarymenu =()=>{
    return(
        <>
            {
                Menu.map((arr)=>{
                   if(Object.keys(arr).length<=2){
                    return(
                        <li><a href={arr.link}>{arr.name}</a></li>
                    )
                   }
                   else{
                    return(
                        <li><a href={arr.link}>{arr.name}</a>
                        <ul className='list-group'>
                        {
                            arr.submenu.map((sub)=>{
                                return(
                                    <li className='list-group-item'><a href={sub.link}>{sub.name}</a></li>
                                )
                            })
                        }

                        </ul></li>
                    )
                   }

                })
            }
        </>
       
      
    )
   
}
export default Secodarymenu;