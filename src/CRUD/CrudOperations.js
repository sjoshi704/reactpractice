import React, { useState } from "react";
import { StudentForm } from "./StudentForm";
import { StudentsTable } from "./StudentsTable";


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

    const onDelete = (id) => {
        const students=studentList.filter((user=> user.id !==id));
        setStudentList([...students]);
    }
   
    console.log(studentList)

    return <>

        <div className="container-fluid">
            <h2 className="h2 text-success text-center"> <span className="text-danger"><i> CRUD</i></span> &nbsp; Operations</h2>
            <hr />
            <StudentForm formSubmit={(value) => {
                console.log(value);
                const { fname, lastname, email, ContactNo, address, state } = value;
                if (!fname || !lastname || !email || !ContactNo || !state || !address) {
                    alert('Fields Cannot be empty');
                    return
                }

                const newStudent = {
                    id: studentList.length + 1,
                    fname: value.fname,
                    lastname: value.lastname,
                    address: value.address,
                    ContactNo: value.ContactNo,
                    email: value.email,
                    state: value.state
                }
                setStudentList([...studentList, newStudent]);


            }}> </StudentForm>

            <StudentsTable studentList={studentList} onDelete={(id) => {
                const bool = window.confirm("Do you want to delete?");
                if (bool) {
                    onDelete(id)
                }
            }}></StudentsTable>


        </div>

    </>
}