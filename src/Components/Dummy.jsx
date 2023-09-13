import { dummyData } from "./DummyData";


function Dummy() {
   
  return (
    <div>
      {dummyData.map((data) => (
        <h2>{data.heading}</h2>
      ))}
    </div>
  );
}

export default Dummy;
