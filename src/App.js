// import Keeper from "./Component/Keeper";
// import FormElement from "./Component/FormElement";
// import FormShow from "./Component/FormShow";
// import { useState } from "react";
// import Total from "./Component/Total";



// const App = () =>{

//   const [formData,setFormData] = useState([]);

//   // const [search, setSearch] = useState("");
//     const dataHandler = (item)=>
//     {
//       // console.log(da);
//       setFormData((perItem)=>
//       {
//         return [item, ...perItem];
//       }
//       )
//     }

//     // console.log(formData);

//       const deleteHandler = (id)=>
//   {
//     // console.log(id);
//     setFormData((perItem)=>
//     {
//       return perItem.filter(item => item.key !== id)
//     }
//     )
//   }


//   const searchChangeHandler = (it) =>{
//     // console.log(it)
//     setFormData((perItem)=>
//     {
//       return perItem.filter(item => item.title === it)
//     }
//     )

//   }

//   return(
// <div>
//   {/* <Keeper/> */}
//   <Keeper searchItem={searchChangeHandler}/>
  
//   <FormElement getData={dataHandler}/>

//   {formData.map((item)=>(
//       <FormShow
//       key={item.key}
//       id={item.key}
//       title={item.title}
//       password={item.password}
//       onDelete={deleteHandler}
//       />
//     ))}

// <Total formData={formData}/>

  
// </div>
//   );
// }
// export default App;


import { useState } from "react";

import VoteForm from "./Component/VoteForm";
import VoteDisplay from "./Component/VoteDisplay";
import Abhik from "./Component/Abhik";
import Deepank from "./Component/Deepank";
// import Length from "./Component/Length";
import LenForm from "./Component/LenForm";


function App() {
  const [formdata, setFormdata] = useState([]);
  const [sudata, setsudata] = useState([]);
  const [dedata, setDedata] = useState([]);
  const [abdata, setAbdata] = useState([]);


  const dataHandler = (obj) => {
    setFormdata((perdata) => {
      const updatedData = [obj, ...perdata];
      const sureshData = updatedData.filter((item) => item.monitor === "Suresh");
      const deepankData = updatedData.filter((item) => item.monitor === "Deepank");
      const abhikData = updatedData.filter((item) => item.monitor === "Abhik");

      setsudata(sureshData); // Update suresh data here
      setAbdata(abhikData);
      setDedata(deepankData);

      return updatedData;
    });
  };



  const deleteHandler = (id) => {
    setFormdata((perItem) => {
      const newdata = perItem.filter(item => item.key !== id);
      const sureshData = newdata.filter((item) => item.monitor === "Suresh");
      setsudata(sureshData); // Update suresh data here
      return newdata;

    });
  };

  const dedeleteHandler = (id) => {
    setFormdata((perItem) => {
      const newdata = perItem.filter(item => item.key !== id);
      const abData = newdata.filter((item) => item.monitor === "Deepank");
      setDedata(abData); // Update suresh data here
      return newdata;

    });
  };

  const abdeleteHandler = (id) => {
    setFormdata((perItem) => {
      const newdata = perItem.filter(item => item.key !== id);
      const deData = newdata.filter((item) => item.monitor === "Abhik");
      setDedata(deData); // Update suresh data here
      return newdata;

    });
  };





  console.log(formdata);
  // let count = formdata.length;
  // console.log(updatedData)
  // console.log(sudata);
  return (
    <div>
      <VoteForm onsave={dataHandler} />
      {/* <Length data={formdata} /> */}
      <LenForm data={formdata}/>
      <VoteDisplay data={sudata} deleteItem={deleteHandler} />
      <Deepank data={dedata} dedeleteItem={dedeleteHandler} />
      <Abhik data={abdata} abdeleteItem={abdeleteHandler} />



    </div>

  );
}
export default App;