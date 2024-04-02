// import Button from "./Button";
import { Fragment } from "react";
const Abhik = ({data, abdeleteItem})=>
{
    console.log(data)

    const deleteHandeler = (id)=>
    {
        abdeleteItem(id)
    }
    return(
        <Fragment>
        <h3>Abhik</h3>

        {data.map((item) => (
         <><p key={item.key}>{item.name} <button type="button" onClick={() => deleteHandeler(item.key)}>Delete</button>
         <button type="button">edit</button> </p></>  
        ))}
        <p>tota {data.length}</p>
        </Fragment>
    );
}
export default Abhik;