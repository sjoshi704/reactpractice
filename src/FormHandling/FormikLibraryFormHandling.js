import { Field, Form, Formik } from 'formik'
import React from 'react'
import { indianStates } from './states'

export function FormikLibraryFormHandling() {
    return <>
        <div className='text-center  container-fluid h3 text-bg-success'> Formik Form Handling</div>

        <div className='card card-body'>
            <Formik initialValues={{
                fname: '',
                lname: '',
                ContactNo: '',
                address: '',
                state: '',
                date: '',
                gender: '',
                textarea: '',
                password: ''
            }}
                onSubmit={(value => {
                    console.log(value);
                })}
            >
                <Form>
                    <div className="row">

                        <div className="col-md-3">
                            <label htmlFor="fname">First Name</label> <span className="text-danger">*</span>
                            <Field type="text" className="form-control" id="fname" name="fname" />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="lname">Last Name</label> <span className="text-danger">*</span>
                            <Field type="text" className="form-control" id="lname" name="lname" />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="ContactNo">Contact Number</label> <span className="text-danger">*</span>
                            <Field type="text" className="form-control" id="ContactNo" name="ContactNo" />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="address">Address </label> <span className="text-danger">*</span>
                            <Field type="text" className="form-control" id="address" name="address" />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="state">Select State </label>
                            <Field as="select" className="form-control" id="state" name="state"  >
                                <option disabled> Select State</option>
                                {
                                    indianStates.map((state, index) => {
                                        return <option value={state} key={index}> {state}</option>
                                    })
                                }
                            </Field>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="date"> Date</label><span className="text-danger">*</span>
                            <Field type="date" className="form-control" id="date" name="date" />
                            <p> Selected Date :<span className='text-danger'> </span></p>

                        </div>

                        <div className="col-md-3 mt-4">
                            <label>Gender:</label><span className="text-danger">*</span>
                            <div className="form-check form-check-inline">
                                <Field
                                    className="form-check-input" type="radio" id="gender" name="gender" value="male" />
                                <label className="form-check-label" htmlFor="male">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field
                                    className="form-check-input" type="radio" id="female" name="gender" value="female" />
                                <label className="form-check-label" htmlFor="female">Female</label>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="textarea">Textarea</label>
                            <Field className="form-control" id="textarea" name="textarea" rows="3" ></Field>
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="password">Password</label><span className="text-danger">*</span>
                            <div className="input-group">
                                <Field type="password" className="form-control" id="password" name="password" />
                            </div>
                        </div>

                        <div className="d-flex justify-content-end">
                            <div className="col-md-3">
                                <button type="submit" className="btn btn-danger">Submit</button>
                            </div>
                        </div>
                    </div>

                </Form>


            </Formik>
        </div>
    </>
}
