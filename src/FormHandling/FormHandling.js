import React, { useState } from 'react';
import { indianStates } from './states';

export function FormHandling() {
  console.log(indianStates);
  const [formInput, setFormInput] = useState({

    fname: "",
    lname: "",
    ContactNo: "",
    state: "",
    address: "",
    gender: "",
    textarea: "",
    password: "",
    file_upload: "",
    checkbox: true,
  });

  const onInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    // console.log(name, value, checked, type);
    formInput[name] = type === "checkbox" ? checked : value;
    setFormInput({ ...formInput });
  }
  // console.log(formInput)
  const [showPassword, setShowPassword] = useState("pass");
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChanged = (e) => {
    setSelectedFile(e.target.files[0]);
  }
  return <>
    <div className="container">
      <h3 className="text-danger">Form Handling </h3>
    </div>
    <div className="container-fluid">

      <div className='card card-body'>
        <form>
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="text">First Name</label> <span className="text-danger">*</span>
              <input type="text" className="form-control" id="fname" name="fname" value={formInput.fname} onChange={onInputChange} />
            </div>

            <div className="col-md-3">
              <label htmlFor="text">Last Name</label><span className="text-danger">*</span>
              <input type="text" className="form-control" id="lname" name="lname" onChange={onInputChange} value={formInput.lname} />
            </div>
            <div className="col-md-3">
              <label htmlFor="number">Contact Number</label><span className="text-danger">*</span>
              <input type="text" className="form-control" id="ContactNo" name="ContactNo" onChange={onInputChange} value={formInput.ContactNo} />
            </div>

            <div className="col-md-3">
              <label htmlFor="text">Address</label><span className="text-danger">*</span>
              <input type="text" className="form-control" id="address" name="address" onChange={onInputChange} value={formInput.address} />
            </div>
            <div className="col-md-3">
              <label htmlFor="select">Select State </label>
              <select className="form-control" id="state" name="state" onChange={onInputChange} value={formInput.state} >
                <option disabled> Select State</option>
                {
                  indianStates.map((state, index) => {
                    return <option value={state} key={index}> {state}</option>
                  })
                }
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="date"> Date</label><span className="text-danger">*</span>
              <input type="date" className="form-control" id="date" onChange={onInputChange} name="date" value={formInput.date} />
              <p> Selected Date :<span className='text-danger'> {formInput.date}</span></p>

            </div>
            <div className="col-md-3 mt-4">
              <label>Gender:</label><span className="text-danger">*</span>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input" checked={formInput.gender === "male"} type="radio" id="gender" name="gender" value="male" onChange={onInputChange} />
                <label className="form-check-label" htmlFor="male">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input" type="radio" checked={formInput.gender === "female"} id="female" name="gender" value="female" onChange={onInputChange} />
                <label className="form-check-label" htmlFor="female">Female</label>
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="textarea">Textarea</label>
              <textarea className="form-control" id="textarea" onChange={onInputChange} name="textarea" rows="3" ></textarea>
            </div>
            <div className="col-md-3">
              <label htmlFor="password">Password</label><span className="text-danger">*</span>
              <div className="input-group">
                <input type={showPassword ? "text" : "password"} className="form-control" id="password" name="password" />
                {showPassword ? <button className="btn btn-danger" onClick={() => { setShowPassword(!"pass") }} type="button"> Hide &nbsp;<i className="bi bi-eye-slash"></i></button> : <button className="btn btn-danger" onClick={() => { setShowPassword(true) }} type="button">Show &nbsp; <i className="bi bi-eye-fill"></i></button>}

              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="file"> Upload File</label>
                <input type="file" className="form-control" onChange={handleFileChanged} id="file_upload" />
                <p> Selected File: <span className='text-danger'> {selectedFile?.name}</span></p>
              </div>
            </div>
            <div className="col-md-3 mt-4">
              <label htmlFor="checkbox">  Are You Agree ? </label>
              <input type="checkbox" className="form-check-input" id="checkbox" onChange={onInputChange} value={formInput.checkbox} name="checkbox" />
            </div>
            <div className="d-flex justify-content-end">
              <div className="col-md-3">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>
}
