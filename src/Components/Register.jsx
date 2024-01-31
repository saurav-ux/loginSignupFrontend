import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import style from './login.css'
const Register = () => {
    const navigate = useNavigate()
  const initialValues = {
    email: '',
    password: '',
    dob: '',
    name: '',
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values,action) => {
      try {
        // Make a POST request using Axios
        const response = await axios.post('https://login-signup-backend-lovat.vercel.app/login', values);

        // Handle the response as needed
        console.log('Response:', response.data);
        navigate('/')
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
      action.resetForm();
    },
  });

  return (
    <div>
    <div className='form-container'>
        <div className='head'>SIGN IN</div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
          className='input'
            type="text"
            placeholder="username"
            required
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.name && Boolean(errors.name)}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Control
            className='input'
            type="date"
            placeholder="Date Of Birth"
            name="dob"
            required
            value={values.dob}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.dob && Boolean(errors.dob)}
          />
          <Form.Control.Feedback type="invalid">{errors.dob}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className='input'
            type="email"
            placeholder="email"
            required
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.email && Boolean(errors.email)}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className='input'
            type="password"
            placeholder="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.password && Boolean(errors.password)}
          />
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>

        <button  type="submit" className='btn'>
         REGISTER
        </button>
      </Form>
      <br/>
      <p className='account'>
        Already have an account?{' '}
        <cite>
          <Link to="/" className='link-unstyled'>Log In</Link>
        </cite>
      </p>
    </div>
    </div>
  );
};

export default Register;
