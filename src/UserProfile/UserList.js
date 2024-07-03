import { useState} from "react";
import { UserProfile } from "./userProfile";

export function UserList() {
  const [users,setUsers] = useState([
    { 
      id:1,
      firstName: "Alice",
      lastName: "Smith",
      // education: "Master's Degree",
      // email: "alice.smith@example.com",
      // gender: "Female",
      address: "456 Oak Avenue, Springfield, USA",
      // admin: true,
    
    },
    {   
      id:2,
      firstName: "Bob",
      lastName: "Johnson",
      // education: "PhD",
      // email: "bob.johnson@example.com",
      // gender: "Male",
      address: "789 Maple Drive, Lakeside, USA",
      // admin: true,
   
    },
    // {
    //   firstName: "Emily",
    //   lastName: "Davis",
    //   education: "Bachelor's Degree",
    //   email: "emily.davis@example.com",
    //   gender: "Female",
    //   address: "101 Pine Street, Riverside, USA",
    //   admin: false,
    //   id:3

    // },
    // {
    //   firstName: "Michael",
    //   lastName: "Brown",
    //   education: "Associate's Degree",
    //   email: "michael.brown@example.com",
    //   gender: "Male",
    //   address: "222 Elm Road, Mountainview, USA",
    //   admin: false,
    //   id:4
    // },
    // {
    //   firstName: "Sophia",
    //   lastName: "Lee",
    //   education: "High School Diploma",
    //   email: "sophia.lee@example.com",
    //   gender: "Female",
    //   address: "333 Cedar Lane, Sunset Valley, USA",
    //   admin: false,
    //   id:5
    // },
  ]);

  // const [firstName ,setFirstName]=useState("");
  // const [lastName ,setLastName]=useState("");
  // const [address ,setAddress]=useState("");

//   const onFirstNameChange=(e) => {
//     setFirstName(e.target.value);
//   };
//  const onLastNameChange=(e) =>{
//   setLastName(e.target.value);
//  }

//  const onAddressChange=(e) => {
//   setAddress(e.target.value);
//  }

const [formValues, setFormValues] = useState({
  firstName: "",
  lastName: "",
  address: ""
});
const onInputChange=(e) => {
console.log(e.target.value+"===>"+ e.target.name);
formValues[e.target.name]=e.target.value;
setFormValues({...formValues});
}


 const AddUser=() => {
  console.log(formValues.firstName,formValues.lastName, formValues.address);
  users.push({
    id:users.length+1,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address: formValues.address
  })
setUsers([...users]);
setFormValues({
  firstName: "",
  lastName: "",
  address: ""
})
// setAddress("");
// setFirstName("");
// setLastName("");
 }
  console.log(users);
 const onDeleteUser=(id) => {
  // alert(id);
  const filteredUsers= users.filter(user => user.id !== id);
     const deleteUsers=[...filteredUsers];
     setUsers(deleteUsers);

  
 }
  return (
    <div>
      <h3 className="text-danger">User List</h3>
      <div className="row col-md-12">
    <div className=" col-md-3">
       <label className="col-form-label"> first Name</label>
      <input type="text" name="firstName" className="form-control col-md-3"value={formValues.firstName} onChange={onInputChange} placeholder="enter firstname" />
    </div>  <br />
    <div className=" col-md-3">
       <label className="col-form-label"> last Name</label>
      <input type="text" name="lastName"  className="form-control col-md-3"value={formValues.lastName}  onChange={onInputChange} placeholder="enter lastname" />
    </div>  <br />

    <div className="row col-md-3">
    <label className="col-form-label">Address</label>
      <input type="text" name="address"  className="form-control" value={formValues.address}  onChange={onInputChange} placeholder="enter address" />
      </div>
      <div className="col-md-1"> 
        <br />   
      <button className="btn btn-success btnLoc" onClick={AddUser}> Add User</button>
      </div>
      </div>

      {users.map((user) =>{
        return <div className="row"key={user.id}> <UserProfile firstName={user.firstName} lastName={user.lastName}  address={ user.address} education={user.education} gender={user.gender} id={user.id}>  </UserProfile>
      <div className="d-flex justify-content-center mb-2">
          <button className="btn btn-danger" onClick={()=>{
            onDeleteUser(user.id);
          }}> Delete</button>
      </div>
      <hr></hr>
     
    </div>  
      })}
    </div>
  );
}



// export function UserList() {
//   const userDetails = [

//     {
//       firstName: "Bob",
//       lastName: "Johnson",
//       education: "PhD",
//       email: "bob.johnson@example.com",
//       gender: "Male",
//       address: "789 Maple Drive, Lakeside, USA",
//       admin: true,
//       id: 1,
//     },
 
//     {
//       firstName: "Michael",
//       lastName: "Brown",
//       education: "Associate's Degree",
//       email: "michael.brown@example.com",
//       gender: "Male",
//       address: "222 Elm Road, Mountainview, USA",
//       admin: false,
//       id: 2,
//     }, 
    
//     {
//         firstName: "Emily",
//         lastName: "Davis",
//         education: "Bachelor's Degree",
//         email: "emily.davis@example.com",
//         gender: "Female",
//         address: "101 Pine Street, Riverside, USA",
//         admin: false,
//         id: 3,
//       },{
//         firstName: "Alice",
//         lastName: "Smith",
//         education: "Master's Degree",
//         email: "alice.smith@example.com",
//         gender: "Female",
//         address: "456 Oak Avenue, Springfield, USA",
//         admin: true,
//         id: 4 ,
//       },
//     {
//       firstName: "Sophia",
//       lastName: "Lee",
//       education: "High School Diploma",
//       email: "sophia.lee@example.com",
//       gender: "Female",
//       address: "333 Cedar Lane, Sunset Valley, USA",
//       admin: false,
//       id: 5,
//     },
//   ];

//   return (
//     <div>
//       <h3 className="text-success"> User List</h3>
//       {userDetails.map((user,value) => {
//         return (
//             <div>
//           <UserProfile firstName={user.firstName} lastName={user.lastName} education={user.education} gender={user.gender} id={user.id}></UserProfile>
//        </div>
//         );
//       })}
//     </div>
//   );
// }
