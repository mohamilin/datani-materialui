import React from "react";
import _ from "lodash/fp";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {Grid} from "@material-ui/core";
import "./styles/Register.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

function Register() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    Axios({
        method: 'post',
        url: 'https://5f51b1f85e98480016123cb6.mockapi.io/user-datani',
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password : data.password
        }
      });
      window.location.replace("https://www.kompas.com");

  }; // your form submit function which will invoke after successful validation

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>REGISTER</h1>
            <label>Nama Depan</label>
            <input
              name="firstName"
              placeholder="Nama Depan"
              ref={register({
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {_.get("firstName.type", errors) === "required" && (
              <p>This field is required</p>
            )}
            {_.get("firstName.type", errors) === "maxLength" && (
              <p>First name cannot exceed 20 characters</p>
            )}
            {_.get("firstName.type", errors) === "pattern" && (
              <p>Alphabetical characters only</p>
            )}
            <label>Nama Belakang</label>
            <input
              name="lastName"
              placeholder="Nama Belakang"
              ref={register({ pattern: /^[A-Za-z]+$/i })}
            />
            {_.get("lastName.type", errors) === "pattern" && (
              <p>Alphabetical characters only</p>
            )}
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

export default Register;
