import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { technologies } from './states'
export function EmployeeListForm() {

    const [employees, setEmployees] = useState([
        { id: 1, empName: "Saurabh", age: 28, course: "PHP" },
        { id: 2, empName: "Yashjeet", age: 23, course: "React.js" },
        { id: 3, empName: "Pranay", age: 24, course: "JAVA" },
    ]);

    return <>
        <div className='conitainer'>
            <h1 className='h3 text-center text-success'> Employee List</h1>
            <div className='row'>
                <div className='card card-body'>
                    <Formik initialValues={{
                        empName: '',
                        age: '',
                        course: '',
                    }}

                        onSubmit={(value, { resetForm }) => {
                            console.log(value);
                            const { empName, age, course } = value;
                            if(!empName||!age||!course){
                                alert("Field Cannot be empty");
                                return;
                            }
                            const newEmployee = {
                                id: employees.length + 1,
                                empName: value.empName,
                                age: value.age,
                                course: value.course
                            }
                            setEmployees([...employees, newEmployee])
                            resetForm();
                        }}>

                        <Form>
                            <div className="row">
                                <div className="col-md-3">
                                    <label htmlFor="stdName">Employee Name</label> <span className="text-danger">*</span>
                                    <Field type="text" className="form-control" id="empName" name="empName" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="age">Employee Age</label> <span className="text-danger">*</span>
                                    <Field type="text" className="form-control" id="age" name="age" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="course">Select Course</label>
                                    <Field as="select" className="form-control" id="course" name="course">
                                        <option disabled> Select Course</option>
                                        {technologies.map((course, index) => (
                                            <option value={course} key={index}>{course}</option>
                                        ))}
                                    </Field>
                                </div>
                                <div className="col-md-1 d-flex align-items-end">
                                    <button type="submit" className="btn btn-danger">Submit</button>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
            <hr />

            <div>
             <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th> Id</th>
                        <th> Employee Name</th>
                        <th> Employee Age</th>
                        <th> Course</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee) =>{
                            return <tr>
                                <td>{employee.id}</td>
                                <td>{employee.empName}</td>
                                <td>{employee.age}</td>
                                <td>{employee.course}</td>
                            </tr>
                        })
                    }
                </tbody>

             </table>
            </div>

        </div>
    </>
}