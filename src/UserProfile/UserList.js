import { useState} from "react";
import { UserProfile } from "./userProfile";

export function UserList() {
  const users = [
    {
      firstName: "Alice",
      lastName: "Smith",
      education: "Master's Degree",
      email: "alice.smith@example.com",
      gender: "Female",
      address: "456 Oak Avenue, Springfield, USA",
      admin: true,
      id:1
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      education: "PhD",
      email: "bob.johnson@example.com",
      gender: "Male",
      address: "789 Maple Drive, Lakeside, USA",
      admin: true,
      id:2
    },
    {
      firstName: "Emily",
      lastName: "Davis",
      education: "Bachelor's Degree",
      email: "emily.davis@example.com",
      gender: "Female",
      address: "101 Pine Street, Riverside, USA",
      admin: false,
      id:3

    },
    {
      firstName: "Michael",
      lastName: "Brown",
      education: "Associate's Degree",
      email: "michael.brown@example.com",
      gender: "Male",
      address: "222 Elm Road, Mountainview, USA",
      admin: false,
      id:4
    },
    {
      firstName: "Sophia",
      lastName: "Lee",
      education: "High School Diploma",
      email: "sophia.lee@example.com",
      gender: "Female",
      address: "333 Cedar Lane, Sunset Valley, USA",
      admin: false,
      id:5
    },
  ];

  console.log(users);

  return (
    <div>
      <h3 className="text-danger">User List</h3>

      {users.map((user) =>{
        return <div key={user.id}> <UserProfile firstName={user.firstName} lastName={user.lastName} education={user.education} gender={user.gender} id={user.id}>  </UserProfile>
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
