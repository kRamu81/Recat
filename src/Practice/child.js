//---------->class components: A component is part of UI in a webpage
//import { Components } from "react";

// class Greeting extends Components{
//     render(){
//         return <h1>Hello world</h1>
//     }
// }
// export default Greeting;

// ---------> pros is data passing accses using App.js
// ---------> Props destructing passing the name directly in function reduce the time complexity
//  export function Greeting({ name }) {
//   return <h1>Hello {name}</h1>;
// }

//state : changing data
// import {useState} from "react";
// function Counter(){
//     const[count,setCount] = useState(0);
//     return(
//         <>
//         <p>Count:{count}</p>
//         <button onClick={() =>
//             setCount(count+1)
//         }>Click</button>
//         </>
//     )
// }

// export default Counter;

//-----------> default export : single Export per module 
//------------> named export : allow to export multiple values from a module
// export function Header() {
//     return <h1>Header component</h1>;
// }

// export function Footer1(){
//     return <h1>Footer component</h1>;
// }


// function Greeting(props){
//     return <h1>Hello world{props.name}</h1>;
// }

// export default Greeting;



//props destructing
import p2 from './p2';

let Student={
        name:"Ramu",
        Age: "20",
        color :"black"
    }
function Child(){
    
    return(
        <>
        <Parent name={Student.name} age={Student.Age} color={Student.color}/>
        </>
        
    )
}
export default Child;