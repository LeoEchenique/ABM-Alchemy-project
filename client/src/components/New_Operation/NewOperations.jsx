/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Nav from "../Nav/Nav";
import style from "./NewOperation.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function NewOperation() {
  /* this will recieve the entire operation to display in the form in case of an update */
  let { id } = useParams();
  const [updateOp, setUpdateOp] = useState(null);
  const [form, setForm] = useState({
    Reason: "",
    Mount: "",
    Type: "Select",
    Fk_wallet: 1,
  });


  
  
  const getOp = async () => {
    if (id) {
      let operation = await axios.get(`http://localhost:3001/Operations/${id}`);
      setUpdateOp(operation.data);
    }
  };
  useEffect(() => {
    getOp();
  }, []);

  const handleChange = (e) => {
    if (e.target.id === "Select") {
      e.target.opacity=0
      e.target[0].disabled = true;
    }
    setForm((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (updateOp !== null) {
      await axios
        .put(`http://localhost:3001/Operations/UpDate/${updateOp.Id}`, form)
        .then(() => {
          alert("Updated succesfully");
        })
        .catch((res) => alert(res.response.data));
      return;
    }
    await axios.post("http://localhost:3001/Operations/New", form)
    .then(()=> alert("Operation created!"))
  };

  return (
    <div className={style.div_container}>
      <Nav />
      {updateOp !== null ? (
        <form
          className={style.form_box}
          onChange={(e) => handleChange(e)}
          onSubmit={handleSubmit}
        >
          <h2 className={style.H2}>Make a new operation</h2>
          <div className={style.container_form}>
            <div className={style.form}>
            <label htmlFor="Reason" className={style.form__label}>Reason:</label>
            <input
              type="text"
              placeholder={updateOp.Reason}
              defaultValue={updateOp.Reason}
              className={style.form_field}
              name="Reason"
              id="Reason"
            />
            <label htmlFor="Type" className={style.form__label}>Operation type:</label>
            <select name="type"  className={`${style.form_field} ${style.Select}`}>
              <option defaultValue={updateOp.Type}>{updateOp.Type}</option>
            </select>
            <input type="number" placeholder={updateOp.Mount} name="Mount"   className={style.form_field}/>
            <input type="submit" value="Update your operation" className={style.submit}/>
            </div>
      
          </div>
        </form>
      ) : (
        <form
          className={style.form_box}
          onChange={(e) => handleChange(e)}
          onSubmit={handleSubmit}
        >
          <h2 className={style.H2}>Make a new operation</h2>
          <div className={style.container_form}>
            <div className={style.form}>
                <label htmlFor="Reason" className={style.form__label}>
                Reason:   </label>
                <input
                  className={style.form_field}
                  type="text"
                  placeholder="Reason..."
                  id="reason"
                  name="Reason"
                />
             
              <label htmlFor="Type"> 
                Operation type:  </label> 
                <select
                  id="Select"
                  name="Type"
                  className={`${style.form_field} ${style.Select}`}
                  onClick={(e) => handleChange(e)}
                >
                  <option className={style.option}>Type</option>
                  <option className={style.option}>Income</option>
                  <option className={style.option}>Expense</option>
                </select>
            
              <label htmlFor="Mount">
                Amount:     </label>
                <input
                  className={style.form_field}
                  type="number"
                  placeholder="Amount"
                  id="Amount"
                  name="Mount"
                />
         
                <input type="submit" value="Submit your operation" className={style.submit} /> 
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
