import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import style from './login.css'
const Login = () => {
    const [checkError,setCheckerror] = useState(null)
    const navigate = useNavigate()
    const initialValues = {
        email: "",
        password: "",
      };
      const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
          initialValues: initialValues,
        //   validationSchema: signUpSchema,
          onSubmit: async (values,action) => {
            try {
              // Make a POST request using Axios
              const response = await axios.post('https://login-signup-backend-lovat.vercel.app/login/validate', values);
      
              // Handle the response as needed
              console.log('Response:', response.data);
              const token = response?.data?.token;
              const name = response?.data?.name
              if (token) {
                localStorage.setItem("token", token);
                localStorage.setItem("name", name)
                // setTimeout(() => {
                  navigate('/detail');
                  window.location.reload();
                // }, 500);
              } else {
                console.error("No token received");
              }
            } catch (error) {
              // Handle error
              console.error('Error:', error?.response?.data?.name);
              setCheckerror(error?.response?.data?.name)
            }
            action.resetForm();
          },
        //    (values)=>{
        //       console.log("Values",values)
        //   }
        });
  return (
    <div  className='form-container'>
           <div className='head'> LOGIN</div>
    <Form onSubmit={handleSubmit} >
    
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email"
     required
     name="email"
    //  id="email"
    className='input'
     value={values.email}
     onChange={handleChange}
     onBlur={handleBlur}
     error={touched.email && Boolean(errors.email)}
     helperText={touched.email && errors.email}
     />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password"
      name="password"
    //   id="password"
    className='input'
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.password && Boolean(errors.password)}
      helperText={touched.password && errors.password}
     />
  </Form.Group>

  <button  type="submit" className='btn'>
    LOGIN
  </button>
  <br/>
  {checkError ? <p className='error'>{checkError}</p> : ""}
</Form>
<br/>
<p className='account'>
            Don't have account?{" "}
            <cite>
              <Link to="/register" className="link-unstyled">Signin</Link>
            </cite>
          </p>
</div>
  )
}

export default Login
