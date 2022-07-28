import React,{useState} from 'react'
import {Link,NavLink} from "react-router-dom"
import {useForm} from "react-hook-form"
import "./LoginForm.scss"

const LoginForm = ({Login,error}) => {
    const {
        register,
        formState: { errors },
        trigger,
    } = useForm();

    // const onSubmit = (data) => {
    //     reset();
    // };
    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
  return (
    <form onSubmit={submitHandler}>
    <div className="form-inner">
        <h4>Sign in to your Account</h4>
        {(error !== "") ? (<div className="error">{error}</div>) : ""}
        <div className="form-group">
            <label className="col-form-label">Email</label>
            <input
                type="email"
                name="email"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", {
                    required: "There is an error that relates to this field",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid Email address",
                    }
                })}
                onKeyUp={() => {
                    trigger("email");
                }}
                onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email}
            />
            {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
            )}
        </div>
        <div className="form-group">
            <label className="col-form-label">Password</label>
            <input
                type="password"
                className={`form-control ${errors.password1 && "invalid"}`}
                {...register("password1", {
                    required: "There is an error that relates to this field"
                })}
                onKeyUp={() => {
                    trigger("password1");
                }}
                onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}
            />
            {errors.lname && (
                <small className="text-danger">{errors.password1.message}</small>
            )}
        </div>
        <div className='form-group1'>
            <Link to='#' className='forgetpass'>Forgot Password?</Link>
        </div>
        <div className='button-section'>
            <button className="button-primary">SIGN IN</button>
        </div>
        <hr />
        <div className='button-section1'>
            <NavLink to="/signup" className="signup">
                CREATE ACCOUNT
            </NavLink>
        </div>


    </div>
</form>
  )
}

export default LoginForm
