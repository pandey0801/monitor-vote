import { useState } from "react";

const VoteForm = (props)=>
{

    // console.log(props.length)

    const [name,setName] = useState("");
    const [monitor, setMonitor] = useState("Suresh");

    const nameHandler = (event) =>
    {
        setName(event.target.value);
    }

    const monitorHandler = (event)=>
    {
        setMonitor(event.target.value);
    }

    const submitHandler =(event)=>
    {
        // event.perventDefault();
        event.preventDefault();

        // console.log("dd");

        const obj={
            name:name,
            monitor:monitor,
            key:Math.random()
        }
        props.onsave(obj)
        // console.log(obj)

    }

return(
<div>
    <h1>Class Monitor Vote</h1>

    {/* <h3> total vote {props.length}</h3> */}
    <form onSubmit={submitHandler}>
        <label> Name
        <input
        type="text"
        value={name}
        onChange={nameHandler}
        />
        </label>

        <select value={monitor} onChange={monitorHandler}>
        <option value="Suresh">Suresh</option>
        <option value="Deepank">Deepank</option>
        <option value="Abhik">Abhik</option>
        </select>

        <button type="submit">Submit</button>
    </form>
</div>
);
}
export default VoteForm;