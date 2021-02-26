import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
//import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';


function App() {
    // form validation rules 
    const validationSchema = Yup.object().shape({
  
        name: Yup.string()
            .required('Name is required'),
        
        dob: Yup.string()
            .required('Date of Birth is required')
            .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        linkedin: Yup.string()
            .required('LinkedIn is required')
            .matches( /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/, 'LinkedIn is should be in valid format'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        file: Yup.string()
            .required('Insert your resume'),
        acceptTerms: Yup.bool()
            .oneOf([true], 'Accept Ts & Cs is required')
    });
    
    // functions to build form returned by useForm() hook
    const { register, handleSubmit, reset, errors } = useForm({
        resolver: yupResolver(validationSchema)
    });
 
    
    function onSubmit(data) {
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    }
    
    
    

    return (
      <>
      <div className="card">
          <div className="card-header bg-dark">
          <img src="./images/logo.png" alt="Mindfire Solutions"/>
          
          </div>
          <div className="card-body">
          <p className="heading">Post your Resume</p>
          <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
          <div className="form-group">
              <label>Name</label>
              <input name="name" type="text" ref={register} className={`form-control ${errors.name ? 'is-invalid' : ''}`} />
              <div className="invalid-feedback">{errors.name?.message}</div>
          </div>

          <div className="form-group">
              <label>Email</label>
              <input name="email" type="text" ref={register} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
              <div className="invalid-feedback">{errors.email?.message}</div>
             
          </div>

          <div className="form-group">
              <label>Password</label>
              <input name="password" type="password" ref={register} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
              <div className="invalid-feedback">{errors.password?.message}</div>
          </div>
          <div className="form-group">
              <label>LinkedIn</label>
              <input name="linkedin" type="url" ref={register} className={`form-control ${errors.linkedin ? 'is-invalid' : ''}`} />
              <div className="invalid-feedback">{errors.linkedin?.message}</div>
          </div>
          <label className="labelheading">Experience</label>
          <div className="form-check form-check-inline">
              <input className="form-check-input" 
                     type="radio" 
                     name="inlineRadioOptions" 
                     id="inlineRadio1" 
                     value="option1"
                      
                     defaultChecked/>
              <label className="form-check-label" htmlFor="inlineRadio1">Fresher</label>
          </div>
          <div className="form-check form-check-inline" >
          <input className="form-check-input" 
                     type="radio" 
                     name="inlineRadioOptions" 
                     id="inlineRadio2" 
                     value="option2"
                     
                     />
              <label className="form-check-label" htmlFor="inlineRadio2">{"<"} 1 year</label>
          </div>
          <div className="form-check form-check-inline" >
          <input className="form-check-input" 
                     type="radio" 
                     name="inlineRadioOptions" 
                     id="inlineRadio3" 
                     value="option3"
                     
                     defaultChecked/>
              <label className="form-check-label" htmlFor="inlineRadio3">{">"} 1 year</label>
          </div>
        
          
          <div className="form-group ">
                            <label>Date of Birth</label>
                            <input name="dob" type="date" ref={register} className={`form-control ${errors.dob ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.dob?.message}</div>
          </div>
          <div className="form-group">
              <label htmlFor="exampleFormControlFile1">Select Resume</label>
              <input name="file" type="file" ref={register} id="exampleFormControlFile1" className={`form-control-file ${errors.file ? 'is-invalid' : ''}`} />
              <div className="invalid-feedback">{errors.file?.message}</div>
          </div>
          <div className="form-group form-check">
                        <input name="acceptTerms" type="checkbox" ref={register} id="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
                        <label for="acceptTerms" className="form-check-label">All the info given by me is true as per my knowledge and belief.</label>
                        <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
          </div>
          
          <button type="submit" className="btn btn-outline-success btn-lg btn-block">Submit Form</button>
          <button className="btn btn-outline-primary" type="reset">Reset</button>
      </form>
     
          </div>
      </div>
     </>
  );
}





export default App;