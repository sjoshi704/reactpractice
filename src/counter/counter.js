export function Counter(userDetails) {
    console.log(userDetails);
    let age = 35;

    return <div>
        <p> Counter component </p>
        <h3> My age is :{age}</h3>
        <p> {userDetails.greetings}{userDetails.name}</p>
        <h4> {userDetails.name} {userDetails.surname}</h4>
    </div>


}