import React from "react";
import Nav from "../Nav/Nav";
import style from "./NewOperation.module.css"
import { useEffect, useState } from "react";
import axios from "axios";

export default function NewOperation() {    /* this will recieve the entire operation to display in the form in case of an update */
    
    
    const [updateOp, setUpdateOp] = useState([]);
    const [form, setForm] = useState({
        Reason: "",
        Mount: "",
        Type: "Select",
        Fk_wallet: 1
    })

    

    const handleChange = (e) => {
        if (e.target.id === "Select") {
            e.target[0].disabled = true;
        }
      setForm(values => ({ ...values, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:3001/Operations/New", form)
    }
    return (
        /*  reason, mount, type, date : TO CREATE */
        /* default values on UPDATE:  reason(TBC)  type  date(TBC) Mount(TBC) */ 
        <div className={style.div_container}>
            <Nav />  
           
            <form className={style.form_box} onChange={(e)=>handleChange(e)} onSubmit={handleSubmit}>
                <h2>Make a new operation</h2>
            {updateOp?.length ? updateOp.map(op => {
                    return (
                    <div className={style.container_form}>
                        <input type="text" value={op.Reason} id="Reason" /> {/* With an onChange gonna set the state to catch (if needed) the updated value */}
                    <select name="type">
                        <option disabled selected>{op.Type}</option>
                    </select>
                        <input type="number" value={op.Mount} name="Mount"/>
                        <input type="submit" value="Update your operation" />
                    </div>
                    )
                 })
            :   <div className={style.container_form}>
                <div className={style.form}>
                    <label htmlFor="Reason">Reason:</label>
                    <input type="text" placeholder="Reason..." id="reason" name="Reason"/>
                
                    <label htmlFor="Type">Operation type:</label>
                <select id="Select" name="Type" onClick={(e)=> handleChange(e)}>
                    <option>Type</option>
                    <option>Income</option>
                    <option>Expense</option>
                </select>
                    <label htmlFor="Mount">Amount:</label>
                    <input type="number" placeholder="Amount" id="Amount" name="Mount" />
                    <input type="submit" value="Submit your operation" />
                </div>
                </div>
                   
            }
             
                
            </form>
        
        </div>
    )
}