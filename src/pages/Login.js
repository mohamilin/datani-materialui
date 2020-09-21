import React from "react";
import _ from "lodash/fp";
// import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
// import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {Grid} from "@material-ui/core";
import "./styles/Register.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

function Login() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async (data) => {
    // alert(JSON.stringify(data));
    fetch("https://5f51b1f85e98480016123cb6.mockapi.io/user-datani")
    .then((response) => response.json())
    .then((result) => {
      let user = result.filter((item) => item.email === data.email);
      if (user.length > 0) {
        if (user[0].password === data.password) {
          localStorage.setItem("user", JSON.stringify(user[0]));
          alert('bagus')
 
          setTimeout(function() {
            window.location.replace("../../index.html");
          }, 2000);
        } else {
          alert("Password Tidak Sesuai");
        }
      } else {
        alert("Email Tidak Sesuai");

      }
    });

  }; // your form submit function which will invoke after successful validation


//   console.log(watch("example")); // you can watch individual input by pass the name of the input

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>LOGIN</h1>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              aria-invalid={errors.email ? "true" : "false"}
              ref={register({
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              type="email"
              placeholder="example@mail.com"
            />
            {errors.email && <p role="alert">{errors.email.message}</p>}
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              aria-invalid={errors.passward ? "true" : "false"}
              ref={register({
                required: "required",
                minLength: {
                  value: 5,
                  message: "min length is 5",
                },
              })}
              type="password"
              placeholder="password"
            />
            {errors.password && <p role="alert">{errors.password.message}</p>}
            <input type="submit" />
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
