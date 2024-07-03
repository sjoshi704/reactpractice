import { useState } from "react";



export function UserProfile(user){
  // const user={

  //   firstName: "John",
  //   lastName: "Doe",
  //   Address:"SanFransisiko USA",
  //   Gender: "Male",
  //   isAdmin:true
  // }
  const[isLoading, setLoading] =useState(false);
  return !isLoading && <div>
  {/* <h3 className="text-danger">  User Profile</h3> */}
  <hr></hr>

  <p>FullName: <span className="text-success h5"> {user.firstName} {user.lastName}</span></p>
  <p> Address:<span className="text-success h5">{user.address}</span></p>
  {/* {user.isAdmin && <p> Gender:<span class="text-success h5">{user.Gender} </span></p>} */}
  {/* <p>{user.isAdmin ?"I am Admin":"I am Not Admin"}</p> */}
  {/* <p> Admin:<span class="text-success h5">{user.isAdmin ? "Yes":"No"}</span></p> */}

</div>
  
  // return<div>
  //   <h3 className="text-danger">  User Profile</h3>
  //   <hr></hr>

  //   <p>FullName: <span class="text-success h5"> {user.firstName} {user.lastName}</span></p>
  //   <p> Address:<span class="text-success h5">{user.Address}</span></p>
  //   {user.isAdmin && <p> Gender:<span class="text-success h5">{user.Gender} </span></p>}
  //   {/* <p>{user.isAdmin ?"I am Admin":"I am Not Admin"}</p> */}
  //   <p> Admin:<span class="text-success h5">{user.isAdmin ? "Yes":"No"}</span></p>

  // </div>
}

// export function UserProfile(user) {
//   const people = [
//         {
//         firstName: "Alice",
//         lastName: "Smith",
//         education: "Master's Degree",
//         email: "alice.smith@example.com",
//       gender: "Female",
//       address: "456 Oak Avenue, Springfield, USA",
//       admin: true,
//     },
//     {
//       firstName: "Bob",
//       lastName: "Johnson",
//       education: "PhD",
//       email: "bob.johnson@example.com",
//       gender: "Male",
//       address: "789 Maple Drive, Lakeside, USA",
//       admin: true,
//     },
//     {
//       firstName: "Emily",
//       lastName: "Davis",
//       education: "Bachelor's Degree",
//       email: "emily.davis@example.com",
//       gender: "Female",
//       address: "101 Pine Street, Riverside, USA",
//       admin: false,
//     },
//     {
//       firstName: "Michael",
//       lastName: "Brown",
//       education: "Associate's Degree",
//       email: "michael.brown@example.com",
//       gender: "Male",
//       address: "222 Elm Road, Mountainview, USA",
//       admin: false,
//     },
//     {
//       firstName: "Sophia",
//       lastName: "Lee",
//       education: "High School Diploma",
//       email: "sophia.lee@example.com",
//       gender: "Female",
//       address: "333 Cedar Lane, Sunset Valley, USA",
//       admin: false,
//     },
//   ];

//   console.log(people);
// // const [isLoading,setLoading] = useState(false);
//   return   (
//     <div className="col-md-12">
//       <h4 className="text Success">
//         <i> User Profile Page </i>
//       </h4>
//       <div className="align card ">
//         {/* type 1 using index */}
//         {/* <div className="card card-body">
//                 <label className="h5">FullName : <span className="h5 font-weight-bold text-danger">  {people[0].firstName} </span> </label>
//                 <label className="h5">Education : <span className="h5 font-weight-bold text-danger">  {people[0].education} </span> </label>
//                 <label className="h5">Email : <span className="h5 font-weight-bold text-danger">  {people[0].email} </span> </label>
//                 <label className="h5">Gender : <span className="h5 font-weight-bold text-danger">  {people[0].gender} </span> </label>
//                 <label className="h5">Address : <span className="h5  font-weight-bold text-danger">  {people[0].address} </span> </label>
//                 <label className="h5">Admin : <span className="h5  font-weight-bold text-danger">  {people[0].admin ? "Yes":"No"} </span> </label>
            
//         </div> */}

//         {/* type-2 using map */}
//           {people.map((value, index)=>{
//             return(
//             <div className="card card-body" key={index}>
//                 <label className="h5">FullName: <span className="h5 text-danger"> {value.firstName} {value.lastName} </span></label>
//                 <label className="h5">Education: <span className="h5 text-danger"> {value.education} </span></label>
//                 <label className="h5">Email: <span className="h5 text-danger"> {value.email} </span></label>
//                 <label className="h5">Gender: <span className="h5 text-danger"> {value.gender} </span></label>
//                 <label className="h5">Address: <span className="h5 text-danger"> {value.address} </span></label>
//                 <label className="h5">Admin: <span className="h5 text-danger"> {value.admin ? "Yes":"No"} </span></label>
//                 </div>
//          ) })}
//         <br />
//       </div>
//     </div>
//   );
// }
