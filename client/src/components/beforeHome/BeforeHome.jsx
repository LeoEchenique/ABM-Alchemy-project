import React from "react";
import style from "./beforeHome.module.css";
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { validator } from "../../helpers/Validator";

export default function BeforeHome() {
  const [log, setLog] = useState(false);
  const [swali, setSwali] = useState(false)
  const [err, setErr]= useState({})
  // sign in button activates a local state to true, then the render of the fign form changes.
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const handleClick = () => {
    setLog(!log);
    setForm({
      Name: "",
      Email: "",
      Password: "",
    });
  };
  const handleChange = (e) => {
    setForm((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const createUser = async (e) => {
    // if register
    e.preventDefault();

    // pass the post to a validator function to see if all is ok

    // si tiene token: se guarda en la localStorage y se hace el pase a home.
    let validate = validator(form, "sign_in");

    if (validate === true) {
      try {
        let res = await axios.post("http://localhost:3001/auth/createUser", form);
        if (res.data.Token) {
          localStorage.setItem("user", JSON.stringify(res.data));
          window.location.replace("http://localhost:3000/Home");
        }
      } catch (error) {
        alert(error.response.data);
        setLog(false);
      }
    } else setErr(validate)   // done, missing styles for errors.
  
  };

  const handleLog = async (e) => {
    // if log in..
    e.preventDefault();
      try {
        let res = await axios.post("http://localhost:3001/auth/logUser", form);
        if (res.data.logged === true) {
          localStorage.setItem("user", JSON.stringify(res.data));
          window.location.replace("http://localhost:3000/Home");
        }
      } catch (error) {
        alert(error.response.data); // here sweetAlert saying that user doesnt exist or an error ocurred with the data provided
        setLog(true);
      }

    
  };
  
  const fireSwal = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Nice! you will be redirected shortly',
      showConfirmButton: false,
      timer: 1500,
      didClose:()=> window.location.replace("http://localhost:3000/Home")
    })
  }
  return (
    <div className={style.div_container}>
        {swali === true ? 
        fireSwal()
      : null}
      {log === false ? (
        <div>
     
          <div className={style.sign}>
            <h2>Time for some budget management? </h2>
            <form
              onChange={(e) => handleChange(e)}
              onSubmit={handleLog}
              className={style.form}
            >
              <label   className={style.label} htmlFor="email">
                {" "}
                Email:{" "}
              </label>
              <input  className={style.input}    placeholder="Email..."  type="text" id="email" name="Email" />

              <label  className={style.label} htmlFor="pass">
                {" "}
                Password:{" "}
              </label>
              <input className={style.input}    placeholder="Password..." type="password" id="pass" name="Password" />
              <input  type="submit" className={style.log_button} value="Log in!" />
            </form>
            <span>Or..</span>
            <h3  className={style.log_button}onClick={handleClick}> Sign in</h3>
          </div>
        </div>
      ) : (
        <div>
        
          <div className={style.sign}>
            <h2>An easy step for you to get started.. </h2>
            <form
              onChange={(e) => handleChange(e)}
              onSubmit={createUser} 
              className={style.form}
            >
              <label className={style.label} htmlFor="email">
                {" "}
                Email:{" "}
              </label>
              <input className={style.input}   placeholder="Email..." type="text" id="email" name="Email" />
              <label className={style.label} htmlFor="email">
                {" "}
                Name:{" "}
              </label>
              <input className={style.input}  placeholder="Name..." type="text" id="name" name="Name" />
              <label className={style.label} htmlFor="pass">
                {" "}
                Password:{" "}
              </label>
              <input className={style.input} placeholder="Password..." type="password" id="pass" name="Password" />
              <input  type="submit" className={style.log_button} value="Register now!" />
            </form>
            <span>Or..</span>
            <h3 className={style.log_button} onClick={handleClick}> Log in </h3>
          </div>
        </div>
      )}
    </div>
  );
}
