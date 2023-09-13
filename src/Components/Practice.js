// import { timers } from "jquery";
// import Menu  from "./MenueArray";
import { dummayarray, recentpostarray } from "./Myarraylist";
import { dummyData } from "./DummyData";
const Prac = () => {
  console.log(recentpostarray.length);
  console.log(recentpostarray);
  recentpostarray.map((post, index) => {
    console.log("Blog Post #" + (index + 1));
    console.log("Heading: " + post.heading);
    console.log("Date: " + post.date);
    console.log("Image: " + post.img);
    console.log("Content: " + post.content);
    console.log("\n"); // Add a newline for separation
  });

  const myarray = dummayarray
  return (
    <>
       {myarray.map((data,indx) =>{
        if(indx===10 ){
            return null
        }
        else{
            return  (
        
        <div>
        <h1>{indx}</h1>
        <img src={data.img} width={'200px'} alt="djfk" />
        <h2>{data.heading}</h2>
        </div>
      )

        }
      }
      )}
    </>
  );
};

export default Prac;
