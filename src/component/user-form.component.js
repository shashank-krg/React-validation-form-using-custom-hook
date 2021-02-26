// // import React, { Component } from "react";
// // import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

// // const regExp = RegExp(
// //     /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
// // )
// // const regExplink = RegExp(
// //     /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
// // )

// // const formValid = ({ isError, ...rest }) => {
// //     let isValid = false;

// //     Object.values(isError).forEach(val => {
// //         if (val.length > 0) {
// //             isValid = false
// //         } else {
// //             isValid = true
// //         }
// //     });

// //     Object.values(rest).forEach(val => {
// //         if (val === null) {
// //             isValid = false
// //         } else {
// //             isValid = true
// //         }
// //     });

// //     return isValid;
// // };

// // export default class UserForm extends Component {
// //     constructor(props) {
// //         super(props)

// //         this.onRadioChange = this.onRadioChange.bind(this);

// //         this.state = {
// //             name: '',
// //             email: '',
// //             password: '',
// //             linkedin: '',
// //             country: '',
// //             region: '',
// //             isError: {
// //                 name: '',
// //                 email: '',
// //                 password: '',
// //                 linkedin: ''
// //             }
// //         }
// //     }
// //     selectCountry (val) {
// //         this.setState({ country: val });
// //       }
    
// //       selectRegion (val) {
// //         this.setState({ region: val });
// //       }


// //     onSubmit = e => {
// //         e.preventDefault();

// //         if (formValid(this.state)) {
// //             console.log(this.state)
// //         } else {
// //             console.log("Form is invalid!");
// //         }
// //     };

// //     onRadioChange = (e) => {
// //         this.setState({
// //           color: e.target.value
// //         });
// //       }

//     setExperience(event) {
//         console.log(event.target.value);
//       }
// //     formValChange = e => {
// //         e.preventDefault();
// //         const { name, value } = e.target;
// //         let isError = { ...this.state.isError };

// //         switch (name) {
// //             case "name":
// //                 isError.name =
// //                     value.length < 4 ? "Atleast 4 characaters required" : "";
// //                 break;
// //             case "email":
// //                 isError.email = regExp.test(value)
// //                     ? ""
// //                     : "Email address is invalid";
// //                 break;
// //             case "password":
// //                 isError.password =
// //                     value.length < 6 ? "Atleast 6 characaters required" : "";
// //                 break;
// //             case "linkedin":
// //                 isError.linkedin = regExplink.test(value)
// //                     ? ""
// //                     : "Linkedin url is invalid";
// //                 break;
// //             default:
// //                 break;
// //         }

// //         this.setState({
// //             isError,
// //             [name]: value
// //         })
// //     };
  
    
   

// //     render() {
//         const { isError } = this.state;
//         const { country, region } = this.state;

//         return (
//             <>
//             <div className="card">
//                 <div className="card-header bg-dark">
//                 <img src="./images/logo.png" alt="Mindfire Solutions"/>
                
//                 </div>
//                 <div className="card-body">
//                 <p className="heading">Post your Resume</p>
//                 <form onSubmit={this.onSubmit} noValidate>
//                 <div className="form-group">
//                     <label>Name</label>
//                     <input
//                         type="text"
//                         className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
//                         name="name"
//                         onChange={this.formValChange}
//                     />
//                     {isError.name.length > 0 && (
//                         <span className="invalid-feedback">{isError.name}</span>
//                     )}
//                 </div>

//                 <div className="form-group">
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
//                         name="email"
//                         onChange={this.formValChange}
//                     />
//                     {isError.email.length > 0 && (
//                         <span className="invalid-feedback">{isError.email}</span>
//                     )}
//                 </div>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input
//                         type="password"
//                         className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
//                         name="password"
//                         onChange={this.formValChange}
//                     />
//                     {isError.password.length > 0 && (
//                         <span className="invalid-feedback">{isError.password}</span>
//                     )}
//                 </div>
//                 <div className="form-group">
//                     <label>LinkedIn</label>
//                     <input
//                         type="url"
//                         className={isError.linkedin.length > 0 ? "is-invalid form-control" : "form-control"}
//                         name="linkedin"
//                         onChange={this.formValChange}
//                     />
//                     {isError.linkedin.length > 0 && (
//                         <span className="invalid-feedback">{isError.linkedin}</span>
//                     )}
//                 </div>
//                 <label className="labelheading">Experience</label>
//                 <div className="form-check form-check-inline" onChange={this.setExperience.bind(this)}>
//                     <input className="form-check-input" 
//                            type="radio" 
//                            name="inlineRadioOptions" 
//                            id="inlineRadio1" 
//                            value="option1"
//                            onChange={this.onRadioChange} 
//                            defaultChecked/>
//                     <label className="form-check-label" htmlFor="inlineRadio1">Fresher</label>
//                 </div>
//                 <div className="form-check form-check-inline" onChange={this.setExperience.bind(this)}>
//                 <input className="form-check-input" 
//                            type="radio" 
//                            name="inlineRadioOptions" 
//                            id="inlineRadio2" 
//                            value="option2"
//                            onChange={this.onRadioChange} 
//                            />
//                     <label className="form-check-label" htmlFor="inlineRadio2">{"<"} 1 year</label>
//                 </div>
//                 <div className="form-check form-check-inline" onChange={this.setExperience.bind(this)}>
//                 <input className="form-check-input" 
//                            type="radio" 
//                            name="inlineRadioOptions" 
//                            id="inlineRadio3" 
//                            value="option3"
//                            onChange={this.onRadioChange} 
//                            defaultChecked/>
//                     <label className="form-check-label" htmlFor="inlineRadio3">{">"} 1 year</label>
//                 </div>
//                 <div className="form-group">
//                     <label>Country</label>
//                     <CountryDropdown
//                         value={country}
//                         onChange={(val) => this.selectCountry(val)} 
//                         className="form-control mb-3"
//                         />
//                     <label>State</label>
//                     <RegionDropdown
//                         country={country}
//                         value={region}
//                         onChange={(val) => this.selectRegion(val)}
//                         className="form-control"
//                          />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="exampleFormControlFile1">Select Resume</label>
//                     <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
//                 </div>
//                 <button type="submit" className="btn btn-outline-success btn-lg btn-block">Submit Form</button>
//             </form>
           
//                 </div>
//             </div>
//            </>
//         );
// //     }
// // }

