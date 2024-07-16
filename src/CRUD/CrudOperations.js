import React, { useState } from "react";
import { StudentForm } from "./StudentForm";
import { StudentsTable } from "./StudentsTable";
import { Route, Routes, useNavigate } from "react-router-dom";



export function CrudOperations() {
    const [studentList, setStudentList] = useState([{
        id: 1,
        fname: "Saurabh",
        lastname: "Joshi",
        email: "100Rabhrjoshi08@gmail.com",
        ContactNo: 8668446654,
        address: "Pune",
        state: "Maharashtra"
    }])

    const [studentToBeUpdated, setStudentToBeUpdated] = useState(null)

    const onDelete = (id) => {
        const students = studentList.filter((user => user.id !== id));
        setStudentList([...students]);
    }

    console.log(studentList)
    const navigate=useNavigate();

    return <>

        <div className="container-fluid">
            <h2 className="h2 text-success text-center"> <span className="text-danger"><i> CRUD</i></span> &nbsp; Operations</h2>
            <hr />
            <Routes>
                <Route path={"/table"} element={<div><StudentsTable OnStudentUpdate={(student) => {
                    setStudentToBeUpdated(student);
                    navigate("/students/form")
                }} studentList={studentList} onDelete={(id) => {
                    const bool = window.confirm("Do you want to delete?");
                    if (bool) {
                        onDelete(id)
                    }
                }}></StudentsTable> </div>}> </Route>

                <Route path={"/form"} element={<div>   <StudentForm student={studentToBeUpdated} formSubmit={(value, id) => {
                    console.log(value);
                    const { fname, lastname, email, ContactNo, address, state } = value;
                    if (!fname || !lastname || !email || !ContactNo || !state || !address) {
                        alert('Fields Cannot be empty');
                        return
                    }
                    if (id) {
                        setStudentList(studentList.map(studentItem =>
                            studentItem.id === id
                                ? { ...studentItem, fname, lastname, email, ContactNo, address, state }
                                : studentItem

                        ));
                        setStudentToBeUpdated(null)
                    } else {
                        const newStudent = {
                            id: studentList.length + 1,
                            fname,
                            lastname,
                            address,
                            ContactNo,
                            email,
                            state
                        };
                        setStudentList([...studentList, newStudent]);
                        navigate("/students/table")
                    }
                }}> </StudentForm></div>}> </Route>


            </Routes>
            {/* <StudentForm student={studentToBeUpdated} formSubmit={(value, id) => {
                console.log(value);
                const { fname, lastname, email, ContactNo, address, state } = value;
                if (!fname || !lastname || !email || !ContactNo || !state || !address) {
                    alert('Fields Cannot be empty');
                    return
                }
                if (id) {
                    setStudentList(studentList.map(studentItem =>
                        studentItem.id === id
                            ? { ...studentItem, fname, lastname, email, ContactNo, address, state }
                            : studentItem

                    ));
                    setStudentToBeUpdated(null)
                } else {
                    const newStudent = {
                        id: studentList.length + 1,
                        fname,
                        lastname,
                        address,
                        ContactNo,
                        email,
                        state
                    };
                    setStudentList([...studentList, newStudent]);
                }
            }}> </StudentForm> */}

            {/* <StudentsTable OnStudentUpdate={(student)=>{
                setStudentToBeUpdated(student);
            }} studentList={studentList} onDelete={(id) => {
                const bool = window.confirm("Do you want to delete?");
                if (bool) {
                    onDelete(id)
                }
            }}></StudentsTable> */}


        </div>

    </>
}