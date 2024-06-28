export function Greetings(props){
let age =20;
    console.log(props);
    return<div>

        <h5> {props.greetings} <i> {props.name}</i></h5>
        <p> My age is :{age}</p>
    </div>
    }